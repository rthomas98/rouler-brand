// Fails if committed dist/ differs from a clean build: missing, obsolete, or changed files.
// Builds into .dist-check/ (same depth as dist/, so source-map paths match), then compares.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const committed = join(root, "dist");
const fresh = join(root, ".dist-check");

const list = (dir) =>
  existsSync(dir)
    ? readdirSync(dir, { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => relative(dir, join(entry.parentPath, entry.name)))
        .sort()
    : [];

rmSync(fresh, { recursive: true, force: true });
try {
  const tsc = join(root, "node_modules", "typescript", "bin", "tsc");
  execFileSync(process.execPath, [tsc, "-p", join(root, "tsconfig.build.json"), "--outDir", fresh], { stdio: "inherit" });

  const expected = list(fresh);
  const actual = list(committed);
  const problems = [
    ...expected.filter((f) => !actual.includes(f)).map((f) => `missing from dist: ${f}`),
    ...actual.filter((f) => !expected.includes(f)).map((f) => `obsolete in dist: ${f}`),
    ...expected
      .filter((f) => actual.includes(f) && !readFileSync(join(fresh, f)).equals(readFileSync(join(committed, f))))
      .map((f) => `stale in dist: ${f}`),
  ];

  if (problems.length > 0) {
    console.error(`dist/ is out of date. Run \`pnpm build\` and commit dist/.\n  ${problems.join("\n  ")}`);
    process.exitCode = 1;
  } else {
    console.log(`dist/ matches a clean build (${expected.length} files).`);
  }
} finally {
  rmSync(fresh, { recursive: true, force: true });
}
