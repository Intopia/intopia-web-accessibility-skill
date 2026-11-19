---
title: "Acceptance Criteria: Toggletip"
metadata:
  author: Intopia
  version: "1.2"
---
A toggletip is a button with an associated pop-up of short content that shows when you activate the button. It extends the Disclosure pattern (`references/acceptance-criteria/Acceptance Criteria - Disclosure.md`) — apply all of Disclosure's criteria first, then apply the additional toggletip-specific criteria below.

### Labels and messaging

- The toggletip button has a descriptive visible label (for example, "more info" or a recognisable icon). (WCAG 2.4.6)
- If the toggletip gives instructions or rules for a form field (for example password rules), all of that information is also available to the field without opening the toggletip: as persistent hint text linked with `aria-describedby`, or by pointing the field's `aria-describedby` at the full content. A hint that covers only some of the rules is not enough. (WCAG 3.3.2, 1.3.1)
### Semantic markup

- The toggletip button only shows or hides the toggletip content. (BP)

### Keyboard

- When the toggletip content is expanded, the content can be collapsed by pressing the Escape key. (BP)
- When the content is collapsed by pressing the Escape key, focus returns to the toggletip button. (WCAG 2.4.3)
- The toggletip content is collapsed when keyboard focus moves away from both the button and the toggletip content. Focus moving from the button into a link inside the content does not collapse it. (BP)

### Visual design

- The toggletip content appears visually when the button is activated. (BP)
