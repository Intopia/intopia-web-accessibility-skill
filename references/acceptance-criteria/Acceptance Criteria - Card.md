---
title: "Acceptance Criteria: Card"
metadata:
  author: Intopia
  version: "1.0"
---
A card is a container that groups related content — typically a heading, image, brief description, and one or more links — into a single unit representing a discrete piece of content (e.g. an article, product, or resource). Cards are usually presented in a set of two or more.

In addition to the Interactive Control, Link, Heading, Image, and List acceptance criteria, the following acceptance criteria apply.

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

### Adaptive UI

*   The card set reflows (e.g. stacking vertically) at smaller screen widths (320px) without requiring horizontal scrolling.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow

### For a card where the whole surface is a link

Some cards wrap their entire surface in a single link, rather than only linking the title. In addition to the criteria above, the following acceptance criteria apply.

#### Labels and messaging

*   The link's accessible name does not include all of the card's visible content.

    *   **Type:** Best Practice

#### Semantic markup

*   The card does not contain any other interactive elements.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Only one link (typically the title link) is exposed to keyboard and screen reader users.

    *   **Type:** Best Practice

*   Any duplicate call-to-action (e.g. a decorative "Read more") is not in the accessibility tree.

    *   **Type:** Best Practice

#### Visual design

*   The card is indicated visually as clickable on hover.

    *   **Type:** Best Practice

*   People can select and highlight the card's text without activating the link.

    *   **Type:** Best Practice

*   If the card has a hover state, the whole card is clickable.

    *   **Type:** Best Practice
