// Runs this repository's TypeScript compiler, or Node, on a file and collects
// what it reports. Every check program uses these two helpers.
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// The repository root: commands run from here, as they are typed.
const root = fileURLToPath(new URL("..", import.meta.url));

// npx tsc with the given arguments. `codes` lists each error code it reports,
// in order, such as ["TS2322"].
export function tsc(...args: string[]) {
  const run = spawnSync("npx", ["tsc", ...args], { cwd: root, encoding: "utf8" });
  const codes = (run.stdout.match(/error TS\d+/g) ?? []).map((e) => e.slice(6));
  return { status: run.status, stdout: run.stdout, codes };
}

// node <file>: its exit status, and what it printed.
export function node(file: string) {
  const run = spawnSync("node", [file], { cwd: root, encoding: "utf8" });
  return { status: run.status, stdout: run.stdout, stderr: run.stderr };
}
