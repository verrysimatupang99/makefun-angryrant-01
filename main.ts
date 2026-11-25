#!/usr/bin/env node
// angry-rant entry: one structured complaint, printed byte-for-byte.

const LINE =
  "You call that a diff? My error messages have better structure than your entire codebase.";

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function usage(): void {
  console.error("Usage: node main.ts [--shout] [--help]");
  console.error("");
  console.error("  --shout  Render the line in uppercase.");
  console.error("  --help   Show this help and exit.");
}

function main(): void {
  if (hasFlag("--help")) {
    usage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
