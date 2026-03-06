---
title: "Code example: Radio Group"
metadata:
  author: Intopia
  version: "1.0"
---

#### Pass

HTML Radio Group with fieldset and legend.

<fieldset aria-required="true">
    <legend>Pick a colour <span aria-hidden="true">*</span></legend>
    <div>
      <input type="radio" id="color-red" name="color" value="red">
      <label for="color-red">Red</label>
    </div>
    <div>
      <input type="radio" id="color-green" name="color" value="green">
      <label for="color-green">Green</label>
    </div>
    <div>
      <input type="radio" id="color-blue" name="color" value="blue">
      <label for="color-blue">Blue</label>
    </div>
  </fieldset>

* * *

ARIA Radio Group with role="group" and aria-labelledby.
<div
  role="radiogroup"
  aria-labelledby="group-heading"
  aria-required="true">
  <h3 id="group-heading">Pick a colour <span aria-hidden="true">*</span></h3>
  <!-- Custom ARIA radio pattern -->
  <div role="radio" aria-checked="true" tabindex="0" id="color-red">Red</div>
  <div role="radio" aria-checked="false" tabindex="-1" id="color-green">Green</div>
  <div role="radio" aria-checked="false" tabindex="-1" id="color-blue">Blue</div>
</div>

* * *

#### Validation Example 1: Native radio group error

Show this state after submit when no option is selected.

<fieldset aria-invalid="true" aria-describedby="color-error" aria-required="true">
  <legend>Pick a colour <span aria-hidden="true">*</span></legend>

  <div>
    <input type="radio" id="color-red-required" name="color-required" value="red">
    <label for="color-red-required">Red</label>
  </div>
  <div>
    <input type="radio" id="color-green-required" name="color-required" value="green">
    <label for="color-green-required">Green</label>
  </div>
  <div>
    <input type="radio" id="color-blue-required" name="color-required" value="blue">
    <label for="color-blue-required">Blue</label>
  </div>

  <p id="color-error">Please choose a colour before continuing.</p>
</fieldset>

* * *

#### Validation Example 2: ARIA radio group error

Custom radiogroup validation state using aria-invalid and aria-describedby.

<div
  role="radiogroup"
  aria-labelledby="group-heading-validation"
  aria-describedby="group-error-validation"
  aria-required="true"
  aria-invalid="true"
  >
  <h3 id="group-heading-validation">Pick a colour</h3>
  <div role="radio" aria-checked="false" tabindex="0" id="color-red-validation">Red</div>
  <div role="radio" aria-checked="false" tabindex="-1" id="color-green-validation">Green</div>
  <div role="radio" aria-checked="false" tabindex="-1" id="color-blue-validation">Blue</div>
</div>
<p id="group-error-validation">Please choose a colour before continuing.</p>

* * *
