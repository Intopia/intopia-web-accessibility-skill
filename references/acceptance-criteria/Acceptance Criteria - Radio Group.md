---
title: "Acceptance Criteria: Radio Group"
metadata:
  author: Intopia
  version: "1.0"
---
A radio group is a set of related radio buttons where users can select exactly one option at a time.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging
- The radio group has a visible label. (WCAG 3.3.2)
- The radio group’s label provides a descriptive label for radio buttons in the group. (WCAG 2.4.6)
- The radio button has a visible label. (WCAG 3.3.2)
- The radio button’s label describes the purpose of the radio button. (WCAG 3.3.2)
- The radio group's error message concisely and precisely describes the issue. (WCAG 3.3.1)
- The error message tells the user how to fix the error. (WCAG 3.3.3)
- There is an accessible visual indicator to identify when the radio group is required. (BP)
- There is an accessible visual indicator to identify when the radio button is disabled. (BP)

### Semantic markup
- Each radio button has the radio role in the accessibility tree. (WCAG 4.1.2)
- The radio buttons are grouped programmatically, and the group role is included in the accessibility tree. (WCAG 1.3.1)
- The radio group’s visible label is the accessible name for the radio group in the accessibility tree. (WCAG 1.3.1)
- The error message is included in the accessibility tree. (WCAG 1.3.1)
- The radio group's required state is included in the accessibility tree. (WCAG 1.3.1)
- The radio button’s disabled state is included in the accessibility tree. (WCAG 1.3.1)
- The radio button’s checked and not checked state is included in the accessibility tree. (WCAG 4.1.2)
### Keyboard
- The radio buttons are focusable using the keyboard. (WCAG 2.1.1)
- The radio buttons can be checked using a keyboard, and when a radio button is checked, the other radio buttons in the group are automatically deselected. (WCAG 2.1.1)
- When a radio button is focused using the keyboard, the Left and Right or Up and Down arrow keys move focus between radio buttons within the same group, and the currently focused radio button is automatically selected (and any previously selected button is deselected). (BP)

### Visual design
- The error state does not use colour as the only method to indicate an error. (WCAG 1.4.1)
- The radio button’s outline and checked state has a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
### Adaptive UI
- The radio group can be viewed at smaller screen widths (320px) without loss of content or functionality, and the user does not have to scroll horizontally to use them. (WCAG 1.4.10)
## Code examples

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
