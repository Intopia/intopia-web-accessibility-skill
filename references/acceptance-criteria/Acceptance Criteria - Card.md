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

*   The heading is first in the DOM/reading order, even if it is not first in the visual layout.

    *   **Type:** Best Practice

*   If the whole card is wrapped in a link, it does not contain any interactive elements.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   If the whole card is wrapped in a link, only one link (typically the title link) is exposed to keyboard and screen reader users.

    *   **Type:** Best Practice

*   If the whole card is wrapped in a link, any duplicate call-to-action (e.g. a decorative "Read more") is not in the accessibility tree.

    *   **Type:** Best Practice

### Visual design

*   When the whole card surface is clickable, this is indicated visually on hover.

    *   **Type:** Best Practice

*   Where the whole card surface is clickable people can select and highlight its text without activating  it.

    *   **Type:** Best Practice

### Adaptive UI

*   The card set reflows (e.g. stacking vertically) at smaller screen widths (320px) without requiring horizontal scrolling.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow
