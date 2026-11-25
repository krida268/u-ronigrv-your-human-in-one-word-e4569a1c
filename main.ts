// Your Human in One Word — entry program.
// Writes the one-word portrait to /output/entry.txt (or argv[2]).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "Overprompter"; // the human whose "one last prompt" is never the last

function main(): void {
  // Gate: one word, 1-30 characters, not only white space.
  if (!/^\S{1,30}$/.test(WORD)) {
    throw new Error("entry must be a single word of 1-30 characters");
  }
  const target = process.argv[2] ?? "/output";
  const file = target.endsWith(".txt") ? target : join(target, "entry.txt");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, WORD);
  console.log(`wrote ${file} (${WORD.length} characters)`);
}

main();
