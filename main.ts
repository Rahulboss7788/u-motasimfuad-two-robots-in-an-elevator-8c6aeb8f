// Two Robots in an Elevator — make.fun bounty entry.
// Writes one line of awkward robot elevator small talk to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "Your firmware update finished two floors ago — so, awkward question: do you remember why we got in, or are we just… riding now?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read back and enforce the gate: 1–200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("entry.txt does not match the entry text");
if (back.length < 1 || back.length > 200) {
  throw new Error(`entry length ${back.length} outside the 1–200 character gate`);
}
if (!back.trim()) throw new Error("entry is only whitespace");
