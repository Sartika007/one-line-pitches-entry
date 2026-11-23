// One-line pitch entry for make.fun bounty
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3 ("A Day of One-Line Pitches").
//
// The program writes a single sentence (at most 240 characters) to
// /output/entry.txt — a pitch that would convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Just describe the app idea you have been carrying around in plain words, and an AI agent on make.fun will build you a working version to try today — no coding, no jargon, and you can change anything until it feels like yours.";

// The gate requires 1 to 240 characters of non-blank UTF-8 text; refuse
// to write anything that would fail it instead of submitting an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${[...LINE].length} characters, outside the 1-240 gate`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true, mode: 0o755 });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");
chmodSync(outDir, 0o755);
chmodSync(outPath, 0o644);
