---
title: "Code example: Text Field"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The text field has a permanent visible label. It does not use placeholder text for its label.

<label for="first-name">First name</label>
<input id="first-name" type="text" />

<label id="first-name">First name</label>
<input aria-labelledby="first-name" type="text" />

* * *

The text fieldâ€™s accessible name is included in the accessibility tree.

<label for="first-name">First name</label>
<input id="first-name" type="text" />

<label id="first-name">First name</label>
<input aria-labelledby="first-name" type="text" />

<i aria-hidden="true" class="fa-solid fa-magnifying-glass"></i>
<input aria-label="search" type="search" />

* * *

The accessible description is included in the accessibility tree.

<label for="date">Date</label>
<input aria-describedby="date-description" id="date" type="text" />
<div id="date-description">dd/mm/yyyy</div>

* * *

The required state is included in the accessibility tree.

<label for="name">Name (required)</label>
<input required="true" id="name" type="text" />

<label for="name">Name <span aria-hidden="true">\*</span></label>
<input required="true" id="name" type="text" />

<label for="name">Name <span aria-hidden="true">\*</span></label>
<input aria-required="true" id="name" type="text" />

* * *

The disabled state is included in the accessibility tree.

<label for="name">Name</label>
<input disabled="true" id="name" type="text" />

<label for="name">Name</label>
<input aria-disabled="true" id="name" type="text" />

* * *

The text field has appropriate autocomplete suggestions when it receives focus.

<label for="name">Name</label>
<input autocomplete="given-name" id="name" type="text" />

* * *

The error message is the accessible description and included in the accessibility tree.

<label for="name">Name</label>
<input aria-describedby="error" aria-invalid="true" id="name" type="text" />
<div>
  <i role="img" aria-label="error:" class="fa-solid fa-triangle-exclamation"></i>
  <span id="error">Please enter your name.</span>
</div>

**Invalid field with error message and hint**

<label for="date">Date</label>
<input aria-describedby="error date-description" aria-invlaid="true" id="date" type="text" />
<div>
  <i role="img" aria-label="error:" class="fa-solid fa-triangle-exclamation"></i>
  <span id="error">Please enter a valid date.</span>
</div>
<div id="date-description">dd/mm/yyyy</div>

