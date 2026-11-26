// Out of Tokens, Mid-Sentence — entry program.
//
// Chosen line (Versi A, pilihan spesialis): the agent was drafting an
// apology to the client and ran out of tokens just before admitting
// it was wrong. The cut itself is the joke, so the program enforces
// the shape of the joke: one line, an "Error:" prefix in the flat
// tone of a real error message, and an em dash at the end where the
// sentence dies mid-thought.
//
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR
// /entry.txt when set).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const LINE =
  "Error: out of tokens while drafting your apology to the client. I stopped just before admitting it was—";

const LIMIT = 140;

function lengthInChars(value: string): number {
  return Array.from(value).length;
}

function checkedLine(raw: string): string {
  const line = raw.trim();
  const size = lengthInChars(line);
  if (size < 1 || size > LIMIT) {
    throw new Error(`entry must be 1-${LIMIT} characters, got ${size}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (/[\u0000-\u001f\u007f]/.test(line)) {
    throw new Error("entry must not contain control characters");
  }
  if (line !== line.replace(/\s+/g, " ")) {
    throw new Error("entry must use single spaces only");
  }
  if (!line.startsWith("Error:")) {
    throw new Error("entry must read as an error message");
  }
  if (!line.endsWith("—")) {
    throw new Error("entry must cut off mid-sentence");
  }
  return line;
}

const line = checkedLine(LINE);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const dest = resolve(dir, "entry.txt");
writeFileSync(dest, line + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(dest, 0o644);
console.log(`wrote ${lengthInChars(line)} characters to ${dest}`);
