# Intopia Web Accessibility Skill

A specialised accessibility skill designed to guide AI agents in building and reviewing accessible web interfaces.

## Experimental Status
This project is an active experiment exploring how providing context, such as acceptance criteria, accessible code examples, and automated colour contrast logic, can improve the accessibility of agent-generated code.

Parts of the skill content were generated using AI, including the colour contrast scripts. We're also testing how different content types, such as acceptance criteria versus code examples, affect agent output, and whether the approach scales as we add more components.

The skill is currently in active development. Supported components include forms and structural elements, modals, accordions, and tabs. We're continuously expanding the content, and new components and code examples will be added over the coming months.

**Note on conformance:** This skill is designed to support the development process, not to guarantee WCAG conformance on its own. Human review and testing remain essential.

## What This Repository Contains

- `SKILL.md` - the main skill instructions and workflow used by agents.
- `INDEX.md` - the resource index mapping components to the right reference files.
- `references/acceptance-criteria/` - component-specific accessibility acceptance criteria.
- `references/code-example/` - practical code examples for common accessible patterns.
- `references/colour-contrast/` - colour contrast reference guidance.
- `scripts/check-colour-contrast.js` - Node.js script to validate contrast ratios from a palette JSON.
- `assets/colour-contrast-template.json` - starter JSON template for contrast checks.

## Why Use This Skill

This skill helps agents:

- default to semantic HTML and use ARIA only where appropriate;
- enforce keyboard navigation and focus-management patterns;
- apply component acceptance criteria consistently;
- catch common accessibility failures early (labels, heading order, focus visibility, contrast);
- run repeatable colour-contrast checks with a script.

## Install in Your Agent

Copy this repository into your agent's skills directory (or equivalent skill/library location used by your platform).

After install, your agent should be able to load:

- `SKILL.md`
- `INDEX.md`
- `references/...`
- `scripts/...`

If your platform supports skill metadata, ensure `SKILL.md` is discoverable by your agent runtime.

Provider-specific setup docs:

| Provider | Setup instructions |
|---|---|
| Claude | [Use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude) |
| Cursor | [Installing skills from GitHub](https://cursor.com/docs/context/skills#installing-skills-from-github) |
| VS Code (GitHub Copilot) | [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) |

## How Agents Should Use It

1. Open `INDEX.md` first.
2. Identify the target component(s) and open matching acceptance-criteria files.
3. Open any matching files in `references/code-example/`.
4. For visual UI work, include contrast resources and produce/update a palette JSON.
5. Run the contrast script and fix failures before finalising.

## Run Colour Contrast Checks

From this repository root:

```bash
node scripts/check-colour-contrast.js assets/colour-contrast-template.json
```

Example with a custom palette file:

```bash
node scripts/check-colour-contrast.js assets/my-component-palette.json
```

The script will output pass/fail results per check and return a non-zero exit code when any check fails.

## Repository Layout

```text
intopia-accessibility-skill/
  SKILL.md
  INDEX.md
  assets/
    colour-contrast-template.json
    tabs-palette.json
  scripts/
    check-colour-contrast.js
    composite-colour.js
  references/
    acceptance-criteria/
    code-example/
    colour-contrast/
```

## Contributing

- Keep reference content practical and implementation-focused.
- Update `INDEX.md` whenever files are added, renamed, or moved.
- Preserve path consistency between `INDEX.md`, `SKILL.md`, and actual folders.
- Prefer small, targeted updates with clear rationale.



We will continue adding references to support more components over the coming weeks and months. We welcome community feedback. If you spot gaps or want support for additional components, please open an issue.
