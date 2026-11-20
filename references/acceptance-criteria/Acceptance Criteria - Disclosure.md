---
title: "Acceptance Criteria: Disclosure"
metadata:
  author: Intopia
  version: "1.1"
---
A disclosure is a button that shows or hides a section of related content.

It extends the Button pattern (`references/acceptance-criteria/Acceptance Criteria - Button.md`). Apply Button's criteria to the disclosure button, then apply the additional criteria below.

### Labels and messaging

- The disclosure button has a visible label that describes the content it shows or hides. (WCAG 2.4.6)
### Semantic markup

- The disclosure button's expanded or collapsed state is included in the accessibility tree. (WCAG 4.1.2)
- The disclosure button has aria-controls set to the ID of the element containing the disclosed content. (WCAG 1.3.1)
- When the content is collapsed, it is not included in the accessibility tree. (WCAG 1.3.2)
- When the content is expanded, it is included in the accessibility tree. (WCAG 1.3.2)
- The content comes directly after the disclosure button in the accessibility tree. (WCAG 1.3.2)
### Keyboard

- When the disclosure button is activated, focus stays on the disclosure button. (WCAG 2.4.3)
- When focus is on the disclosure button and the content is collapsed, pressing Enter or Space expands the content. (WCAG 2.1.1)
- When focus is on the disclosure button and the content is expanded, pressing Enter or Space collapses the content. (WCAG 2.1.1)
### Visual design

- A visual indicator (for example, an arrow icon) shows whether the content is expanded or collapsed. (BP)

- If a visual indicator icon is used, it has a minimum contrast ratio of 3:1 against the background colour. (WCAG 1.4.11)
### Adaptive UI

- The disclosure can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it. (WCAG 1.4.10)
## Code examples

#### Pass

The disclosure button has a visible label that describes the content it shows or hides.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

The disclosure button's accessible name is included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<button aria-expanded="false" aria-controls="shipping-details" aria-label="Shipping details">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

The disclosure button's role of button is included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<div role="button" tabindex="0" aria-expanded="false" aria-controls="shipping-details">Shipping details</div>

The disclosure button's expanded or collapsed state is included in the accessibility tree.

**Collapsed**

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

**Expanded**

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>

The disclosure button has aria-controls set to the ID of the element containing the disclosed content.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

When the content is collapsed it is not included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

When the content is expanded it is included in the accessibility tree.

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details">
  <p>Orders ship within 3 to 5 business days.</p>
</div>

The disclosed content comes directly after the disclosure button in the accessibility tree.

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details">
  <p>Orders ship within 3 to 5 business days.</p>
</div>

The disclosure button is focusable using the keyboard, and is operable using the Space or Enter keys.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<div role="button" tabindex="0" aria-expanded="false" aria-controls="shipping-details">Shipping details</div>
