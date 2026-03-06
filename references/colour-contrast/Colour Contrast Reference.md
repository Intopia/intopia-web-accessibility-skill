---
name: colour-contrast-reference
description: Reference for WCAG 2.2 colour contrast requirements and mandatory process when building or reviewing HTML/CSS. Covers thresholds (normal text 4.5:1, large text and UI 3:1) and use of the contrast check script.
metadata:
  author: Intopia
  version: "1.0"
---
# Colour Contrast Reference

Use this reference whenever building or reviewing HTML/CSS in the Intopia accessibility workflow.

## Why this is mandatory

Colour contrast failures are common and often missed in manual checks, especially:
- low-contrast body text
- placeholder and helper text
- disabled or secondary button text
- input, select, and textarea borders
- focus indicators
- semi-transparent colours that appear lighter than their base hex value

This check is required before an accessibility task is considered complete.

## WCAG 2.2 thresholds used by this workflow

- Normal text: `4.5:1` minimum
- Large text (>= 24px regular, or >= 18.5px bold): `3:1` minimum
- UI components and graphical objects (borders, focus rings, icons, states): `3:1` minimum


## ⚠️ Opacity and transparency — composite before testing

If any colour in your CSS uses `rgba`, `hsla`, a `opacity` property, or any other form of transparency, you **must** calculate the actual composited colour against its background before adding it to the palette. **Never test the pre-opacity hex value — it will not reflect what the browser renders.**

Use the compositing formula per channel:

```
rendered_channel = foreground_channel × alpha + background_channel × (1 − alpha)
```

Example — `rgba(29, 78, 216, 0.3)` over `#FFFFFF`:
```
R: 29  × 0.3 + 255 × 0.7 = 187  → BB
G: 78  × 0.3 + 255 × 0.7 = 202  → CA
B: 216 × 0.3 + 255 × 0.7 = 243  → F3
→ composited colour: #BBCAF3
```

Testing `#1D4ED8` (6.70:1 — passes) instead of `#BBCAF3` (1.63:1 — fails) is a critical error. Use the compositing helper script before building your palette:

```
node scripts/composite-colour.js "rgba(29,78,216,0.3)" "#FFFFFF"
# → Composited: #BBCAF3
```

**Common sources of transparent colours to watch for:**
- Focus rings using `box-shadow` with `rgba` (e.g. `0 0 0 3px rgba(29,78,216,0.3)`)
- Overlay backgrounds and modal backdrops
- Hover and active states with `opacity` transitions
- Border colours defined with `rgba`
- Any colour defined via a CSS custom property that includes alpha

## Mandatory process for agents

1. Identify every colour pair in scope for the component/page/theme:
   - text foreground vs background
   - input borders vs adjacent background
   - focus outline/ring vs adjacent background
   - icon/graphic colour vs background
   - **If any colour uses `rgba`, `hsla`, or `opacity`: composite it against its background first and test the resulting hex. Do not test the base colour.**
2. Create or update a palette JSON file using the schema in this document.
3. Run the contrast script:
   - From repo root:
     - `node scripts/check-colour-contrast.js <path-to-palette.json>`
   - Or from this folder (`references/colour-contrast/`):
     - `node ../../scripts/check-colour-contrast.js <path-to-palette.json>`
4. Review failures and adjust colours.
5. Re-run until all checks pass.
6. Only then present or finalize the implementation.

## Palette JSON schema

The script accepts a JSON object with a `checks` array.

Required fields per check:
- `id`: short unique identifier
- `foreground`: colour value (hex, rgb, rgba, hsl, hsla, or named CSS colour)
- `background`: colour value
- `type`: one of:
  - `text-normal`
  - `text-large`
  - `ui`
  - `graphic`

Optional fields:
- `notes`: free text context (for example, "default input border")
- `state`: free text state marker (for example, "default", "hover", "focus", "disabled")

**Note on rgba in palette values:** the script can accept `rgba` syntax, but this only accounts for transparency correctly if the background value is also accurate. When in doubt, composite manually first and use the resulting hex.

## Templates and example palettes

Palette template and example files are in the skill's `assets` folder:

- From repo root: `assets/colour-contrast-template.json`, `assets/tabs-palette.json`
- From this folder (`references/colour-contrast/`): `../../assets/colour-contrast-template.json`, `../../assets/tabs-palette.json`

Use these as starting points or copy the schema when creating a new palette file.

## Example palette file

```json
{
  "checks": [
    {
      "id": "body-text-on-page",
      "foreground": "#1f2937",
      "background": "#ffffff",
      "type": "text-normal",
      "state": "default",
      "notes": "Paragraph text"
    },
    {
      "id": "button-secondary-text",
      "foreground": "#334155",
      "background": "#e2e8f0",
      "type": "text-normal",
      "state": "default"
    },
    {
      "id": "input-border-default",
      "foreground": "#6b7280",
      "background": "#ffffff",
      "type": "ui",
      "state": "default",
      "notes": "Input border must be >= 3:1"
    },
    {
      "id": "focus-ring-primary-button",
      "foreground": "#1d4ed8",
      "background": "#ffffff",
      "type": "ui",
      "state": "focus"
    },
    {
      "id": "status-icon-success",
      "foreground": "#166534",
      "background": "#f0fdf4",
      "type": "graphic",
      "state": "default"
    }
  ]
}
```

## Output expectations

The script prints:
- each check with measured ratio
- pass/fail result per check
- summary count

Exit codes:
- `0`: all checks passed
- `1`: one or more checks failed, or input invalid

If any check fails, the agent must fix colours and re-run the script before finishing.
