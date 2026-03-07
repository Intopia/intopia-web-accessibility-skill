"use strict";

const fs = require("fs");
const path = require("path");

// Minimum WCAG contrast ratios for each supported check type.
// The script compares a calculated ratio against these values.
const THRESHOLDS = {
  "text-normal": 4.5,
  "text-large": 3.0,
  ui: 3.0,
  graphic: 3.0,
};

// Show the expected command format when no file path is provided.
function printUsage() {
  console.error("Usage: node check-colour-contrast.js <path-to-palette.json>");
}

// Convert one RGB channel (0-255) into linear light space.
// This is required before calculating relative luminance.
function toLinear(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

// Calculate relative luminance from an RGB colour.
// Luminance is the brightness value used by the WCAG formula.
function luminance(rgb) {
  const [r, g, b] = rgb.map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Calculate contrast ratio between two RGB colours.
// Formula: (lighter + 0.05) / (darker + 0.05)
function contrastRatio(foreground, background) {
  const l1 = luminance(foreground);
  const l2 = luminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse hex colour strings:
// - #RGB, #RGBA, #RRGGBB, #RRGGBBAA
// Returns [r,g,b] or [r,g,b,a], or null for invalid values.
function parseHexColour(value) {
  const hex = value.replace("#", "").trim();
  if (hex.length === 3) {
    return hex.split("").map((c) => parseInt(c + c, 16));
  }
  if (hex.length === 4) {
    const [r, g, b, a] = hex.split("").map((c) => parseInt(c + c, 16));
    return [r, g, b, a / 255];
  }
  if (hex.length === 6) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }
  if (hex.length === 8) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
      parseInt(hex.slice(6, 8), 16) / 255,
    ];
  }
  return null;
}

// Parse rgb(...) and rgba(...) CSS colour strings.
// Returns [r,g,b] or [r,g,b,a], or null for invalid values.
function parseRgbColour(value) {
  const match = value
    .trim()
    .match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i);

  if (!match) return null;

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  const a = match[4] !== undefined ? Number(match[4]) : undefined;

  if ([r, g, b].some((n) => Number.isNaN(n) || n < 0 || n > 255)) return null;
  if (a !== undefined && (Number.isNaN(a) || a < 0 || a > 1)) return null;

  return a === undefined ? [r, g, b] : [r, g, b, a];
}

// Convert HSL values to RGB so they can be used in contrast checks.
function hslToRgb(h, s, l) {
  const hue = ((h % 360) + 360) % 360;
  const sat = Math.max(0, Math.min(1, s / 100));
  const light = Math.max(0, Math.min(1, l / 100));

  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = light - c / 2;

  let rp = 0;
  let gp = 0;
  let bp = 0;

  if (hue < 60) [rp, gp, bp] = [c, x, 0];
  else if (hue < 120) [rp, gp, bp] = [x, c, 0];
  else if (hue < 180) [rp, gp, bp] = [0, c, x];
  else if (hue < 240) [rp, gp, bp] = [0, x, c];
  else if (hue < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];

  return [
    Math.round((rp + m) * 255),
    Math.round((gp + m) * 255),
    Math.round((bp + m) * 255),
  ];
}

// Parse hsl(...) and hsla(...) CSS colour strings.
// Returns [r,g,b] or [r,g,b,a], or null for invalid values.
function parseHslColour(value) {
  const match = value
    .trim()
    .match(/^hsla?\(\s*([-\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*([\d.]+)\s*)?\)$/i);

  if (!match) return null;

  const h = Number(match[1]);
  const s = Number(match[2]);
  const l = Number(match[3]);
  const a = match[4] !== undefined ? Number(match[4]) : undefined;

  if ([h, s, l].some((n) => Number.isNaN(n))) return null;
  if (s < 0 || s > 100 || l < 0 || l > 100) return null;
  if (a !== undefined && (Number.isNaN(a) || a < 0 || a > 1)) return null;

  const rgb = hslToRgb(h, s, l);
  return a === undefined ? rgb : [...rgb, a];
}

// Small set of named colours supported by this script.
// Values are mapped to RGB(A) arrays for contrast calculations.
const NAMED_COLOURS = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  green: [0, 128, 0],
  blue: [0, 0, 255],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  transparent: [0, 0, 0, 0],
};

// Parse any supported colour format into numeric channel values.
// Supported inputs: hex, rgb/rgba, hsl/hsla, and named colours above.
function parseColour(value) {
  if (typeof value !== "string") return null;
  const input = value.trim().toLowerCase();
  if (!input) return null;

  if (input.startsWith("#")) return parseHexColour(input);
  if (input.startsWith("rgb")) return parseRgbColour(input);
  if (input.startsWith("hsl")) return parseHslColour(input);
  if (NAMED_COLOURS[input]) return NAMED_COLOURS[input];

  return null;
}

// Blend a foreground colour over a background colour when foreground has alpha.
// This script expects the background to be fully opaque.
function flattenOverBackground(fg, bg) {
  const fgAlpha = fg.length === 4 ? fg[3] : 1;
  const bgAlpha = bg.length === 4 ? bg[3] : 1;

  if (bgAlpha < 1) {
    throw new Error("Background alpha is not supported. Use opaque background colours.");
  }

  if (fgAlpha >= 1) return fg.slice(0, 3);

  const blended = [0, 1, 2].map((i) => Math.round(fg[i] * fgAlpha + bg[i] * (1 - fgAlpha)));
  return blended;
}

// Validate one check record from the JSON input.
// Returns an array of human-readable validation errors.
function validateCheck(check, index) {
  if (!check || typeof check !== "object") {
    return [`checks[${index}] must be an object.`];
  }

  const errors = [];
  if (!check.id || typeof check.id !== "string") {
    errors.push(`checks[${index}].id is required and must be a string.`);
  }
  if (!check.foreground || typeof check.foreground !== "string") {
    errors.push(`checks[${index}].foreground is required and must be a string.`);
  }
  if (!check.background || typeof check.background !== "string") {
    errors.push(`checks[${index}].background is required and must be a string.`);
  }
  if (!check.type || typeof check.type !== "string") {
    errors.push(`checks[${index}].type is required and must be a string.`);
  } else if (!Object.prototype.hasOwnProperty.call(THRESHOLDS, check.type)) {
    errors.push(
      `checks[${index}].type must be one of: ${Object.keys(THRESHOLDS).join(", ")}.`
    );
  }
  return errors;
}

// Read and parse the palette JSON file and verify basic structure.
function readPalette(filePath) {
  const resolved = path.resolve(process.cwd(), filePath);
  const raw = fs.readFileSync(resolved, "utf8");
  const parsed = JSON.parse(raw);

  if (!parsed || typeof parsed !== "object" || !Array.isArray(parsed.checks)) {
    throw new Error("Palette JSON must be an object with a checks array.");
  }

  return parsed;
}

// Main program flow:
// 1) Read input file
// 2) Validate checks
// 3) Parse colours and calculate contrast
// 4) Print per-check results and final totals
// 5) Exit with code 1 when any check fails
function run() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    printUsage();
    process.exit(1);
  }

  let palette;
  try {
    palette = readPalette(inputPath);
  } catch (error) {
    console.error(`Failed to load palette JSON: ${error.message}`);
    process.exit(1);
  }

  const validationErrors = palette.checks.flatMap(validateCheck);
  if (validationErrors.length > 0) {
    console.error("Input validation failed:");
    for (const error of validationErrors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  let passCount = 0;
  let failCount = 0;

  console.log("Colour contrast results:");
  console.log("-----------------------");

  for (const check of palette.checks) {
    // Convert colour strings into RGB(A) arrays.
    const fg = parseColour(check.foreground);
    const bg = parseColour(check.background);

    if (!fg || !bg) {
      failCount += 1;
      console.log(`FAIL ${check.id}: invalid colour value(s).`);
      continue;
    }

    let effectiveForeground;
    try {
      effectiveForeground = flattenOverBackground(fg, bg);
    } catch (error) {
      failCount += 1;
      console.log(`FAIL ${check.id}: ${error.message}`);
      continue;
    }

    // Background alpha is blocked earlier, so we can safely use RGB here.
    const effectiveBackground = bg.slice(0, 3);
    const ratio = contrastRatio(effectiveForeground, effectiveBackground);
    const threshold = THRESHOLDS[check.type];
    const result = ratio >= threshold ? "PASS" : "FAIL";

    if (result === "PASS") {
      passCount += 1;
    } else {
      failCount += 1;
    }

    const statePart = check.state ? ` [${check.state}]` : "";
    const notesPart = check.notes ? ` - ${check.notes}` : "";

    console.log(
      `${result} ${check.id}${statePart}: ${ratio.toFixed(2)}:1 (required ${threshold}:1)${notesPart}`
    );
  }

  console.log("-----------------------");
  console.log(`Total: ${palette.checks.length}, Passed: ${passCount}, Failed: ${failCount}`);

  process.exit(failCount > 0 ? 1 : 0);
}

run();
