---
title: "Code example: Disclosure"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The disclosure button has a visible label that describes the content it shows or hides.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

* * *

The disclosure button's accessible name is included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<button aria-expanded="false" aria-controls="shipping-details" aria-label="Shipping details">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

* * *

The disclosure button's role of button is included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<div role="button" tabindex="0" aria-expanded="false" aria-controls="shipping-details">Shipping details</div>

* * *

The disclosure button's expanded or collapsed state is included in the accessibility tree.

**Collapsed**

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

**Expanded**

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>

* * *

The disclosure button has aria-controls set to the ID of the element containing the disclosed content.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

* * *

When the content is collapsed the content is not included in the accessibility tree.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details" hidden>
  <p>Orders ship within 3 to 5 business days.</p>
</div>

* * *

When the content is expanded the content is included in the accessibility tree.

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details">
  <p>Orders ship within 3 to 5 business days.</p>
</div>

* * *

The disclosed content comes directly after the disclosure button in the accessibility tree.

<button aria-expanded="true" aria-controls="shipping-details">Shipping details</button>
<div id="shipping-details">
  <p>Orders ship within 3 to 5 business days.</p>
</div>

* * *

The disclosure button is focusable using the keyboard, and is operable using the Space or Enter keys.

<button aria-expanded="false" aria-controls="shipping-details">Shipping details</button>

<div role="button" tabindex="0" aria-expanded="false" aria-controls="shipping-details">Shipping details</div>
