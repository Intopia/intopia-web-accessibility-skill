---
title: "Acceptance Criteria: Card"
metadata:
  author: Intopia
  version: "1.0"
---
A card is a container that groups related content — typically a heading, image, brief description, and one or more links — into a single unit representing a discrete piece of content (e.g. an article, product, or resource). Cards are usually presented in a set of two or more.

In addition to the Interactive Control, Link, Heading, Image, and List acceptance criteria, the following acceptance criteria apply.

### Labels and messaging

- The link text is not the entire visible content of the card. (BP)

### Semantic markup

- Where two or more cards are presented together, they are grouped as a list and the list semantics are included in the accessibility tree. (WCAG 1.3.1)
- Each card contains a heading that introduces its content. (BP)
- Every card within the same set uses the same heading level. (WCAG 1.3.1)
- The heading is first in the reading order, even if it is not first in the visual layout. (BP)
- The card does not nest any interactive elements. (WCAG 4.1.2)
### Adaptive UI

- The card set reflows (e.g. stacking vertically) at smaller screen widths (320px) without requiring horizontal scrolling. (WCAG 1.4.10)
### Visual design

- If the card has a hover state, the whole card is clickable. (BP)

### For cards where the whole surface is a clickable

- The card is indicated visually as clickable on hover. (BP)

#### Visual design

- People can select and highlight the card's text without activating the link. (BP)

#### Semantic markup

- Any duplicate call-to-action (e.g. a decorative "Read more") is not in the accessibility tree. (BP)

#### Pointer interaction

- Activating the card occurs on the up-event of a pointer interaction, not the down-event. (WCAG 2.5.2)
