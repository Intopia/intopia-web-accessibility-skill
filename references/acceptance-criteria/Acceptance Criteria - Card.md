---
title: "Acceptance Criteria: Card"
metadata:
  author: Intopia
  version: "1.0"
---
A card is a container that groups related content — typically a heading, image, brief description, and one or more links — into a single unit representing a discrete piece of content (e.g. an article, product, or resource). Cards are usually presented in a set of two or more.

In addition to the Interactive Control, Link, Heading, Image, and List acceptance criteria, the following acceptance criteria apply.

### Labels and messaging

*   The link text is not the entire visible content of the card.

    *   **Type:** Best Practice

### Semantic markup

*   Where two or more cards are presented together, they are grouped as a list and the list semantics are included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   Each card contains a heading that introduces its content.

    *   **Type:** Best Practice

*   Every card within the same set uses the same heading level.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The heading is first in the reading order, even if it is not first in the visual layout.

    *   **Type:** Best Practice

*   The card does not nest any interactive elements.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

### Adaptive UI

*   The card set reflows (e.g. stacking vertically) at smaller screen widths (320px) without requiring horizontal scrolling.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow

### Visual design

*   If the card has a hover state, the whole card is clickable.

    *   **Type:** Best Practice

### For cards where the whole surface is a clickable

*   The card is indicated visually as clickable on hover.

    *   **Type:** Best Practice

#### Visual design

*   People can select and highlight the card's text without activating the link.

    *   **Type:** Best Practice

#### Semantic markup

*   Any duplicate call-to-action (e.g. a decorative "Read more") is not in the accessibility tree.

    *   **Type:** Best Practice

#### Pointer interaction

*   Activating the card occurs on the up-event of a pointer interaction, not the down-event.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.5.2 Pointer Cancellation

