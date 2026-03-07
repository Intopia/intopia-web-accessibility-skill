#!/usr/bin/env node
/**
 * composite-colour.js
 * Intopia Accessibility — Colour Contrast Workflow
 *
 * Composites an rgba/hsla foreground colour against a background and outputs
 * the resulting hex value for use in contrast palette JSON files.
 *
 * Usage:
 *   node scripts/composite-colour.js <rgba-colour> <background-hex>
 *
 * Examples:
 *   node scripts/composite-colour.js "rgba(29,78,216,0.3)" "#FFFFFF"
 *   node scripts/composite-colour.js "rgba(185,28,28,0.25)" "#FAFAF7"
 *
 * Output:
 *   Composited hex value, e.g. #BBCAF3
 *   Use this hex in your palette JSON instead of the rgba value.
 */

// Parse a hex string into RGB channel numbers.
// Supports both short form (#RGB) and full form (#RRGGBB).
function parseHex(hex) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean;
  return [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16));
}

// Parse rgb(...) or rgba(...) into channel values and alpha.
// If alpha is not provided, default to 1 (fully opaque).
function parseRgba(colour) {
  const match = colour.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (!match) return null;
  return {
    rgb: [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])],
    alpha: match[4] !== undefined ? parseFloat(match[4]) : 1,
  };
}

// Blend (composite) a foreground colour over a background colour.
// Formula per channel: foreground * alpha + background * (1 - alpha)
function composite(fg, alpha, bg) {
  return fg.map((c, i) => Math.round(c * alpha + bg[i] * (1 - alpha)));
}

// Convert numeric RGB channels into uppercase hex string (#RRGGBB).
function toHex(rgb) {
  return "#" + rgb.map(c => c.toString(16).padStart(2, "0").toUpperCase()).join("");
}

// Main script flow:
// 1) Read command arguments
// 2) Validate and parse foreground/background values
// 3) Composite foreground over background
// 4) Print resulting hex value for palette use
const [,, fgArg, bgArg] = process.argv;

if (!fgArg || !bgArg) {
  console.error("Usage: node scripts/composite-colour.js <rgba-colour> <background-hex>");
  console.error('Example: node scripts/composite-colour.js "rgba(29,78,216,0.3)" "#FFFFFF"');
  process.exit(1);
}

// Parse the foreground rgba/rgb string.
const fg = parseRgba(fgArg);
if (!fg) {
  console.error(`Could not parse foreground colour: ${fgArg}`);
  console.error("Expected format: rgba(R, G, B, A) or rgb(R, G, B)");
  process.exit(1);
}

// Parse the background hex string.
let bg;
try {
  bg = parseHex(bgArg);
} catch {
  console.error(`Could not parse background colour: ${bgArg}`);
  console.error("Expected format: #RRGGBB or #RGB");
  process.exit(1);
}

const result = composite(fg.rgb, fg.alpha, bg);
const hex = toHex(result);

console.log(`\nInput:       ${fgArg}`);
console.log(`Background:  ${bgArg}`);
console.log(`Composited:  ${hex}\n`);
console.log(`Use ${hex} in your palette JSON, then run check-colour-contrast.js to validate.\n`);