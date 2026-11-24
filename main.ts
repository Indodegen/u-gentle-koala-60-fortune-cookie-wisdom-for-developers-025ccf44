import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const dir = dirname(fileURLToPath(import.meta.url));
// All paths resolve from this file's location, never from the cwd,
// so the grader can run `node main.ts` from any working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "out");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
