---
title: "Acceptance Criteria: Text Field"
metadata:
  author: Intopia
  version: "1.0"
---
A text field is an input control that allows users to enter and edit free-form text.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### Labels and messaging

- The text field has a permanent visible label. It does not use placeholder text for its label. (WCAG 3.3.2)
- The text field's label describes the purpose of the text field. (WCAG 2.4.6)
- The text field has a description that provides information that helps users enter the right data. (WCAG 3.3.2)
- There is a visible way to identify the text field is required. (WCAG 3.3.2)
- There is a visible way to identify when the text field is disabled. (BP)
- When the text field has invalid or missing data, then a descriptive error message is displayed close to the field. (WCAG 3.3.1)
### Semantic markup

- The text field has the textbox role in the accessibility tree. (WCAG 4.1.2)
- The text field’s value is included in the accessibility tree. (WCAG 4.1.2)
- The accessible description is included in the accessibility tree. (WCAG 1.3.1)
- The required state is included in the accessibility tree. (WCAG 1.3.1)
- The disabled state is included in the accessibility tree. (WCAG 4.1.2)
- The text field has appropriate autocomplete suggestions when it receives focus. (WCAG 1.3.5)
- The text field shows the default on-screen keyboard when focused on a mobile device. (BP)
- The error message is the accessible description and included in the accessibility tree. (WCAG 1.3.1)
### Keyboard

- The text field is focusable using a keyboard. (WCAG 2.1.1)
- People can enter a value into the text field using a keyboard. (WCAG 2.1.1)
- People can focus onto the text field without unexpectedly losing context. (WCAG 3.2.1)
- People can enter or change values into the text field without unexpectedly losing context. (WCAG 3.2.2)
### Visual design

- The text field’s outline has a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
### Adaptive UI

- The text field can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it. (WCAG 1.4.10)

## Code examples

```html
<!-- Visible label, not placeholder; autocomplete for personal data -->
<label for="given-name">First name</label>
<input id="given-name" type="text" autocomplete="given-name">

<!-- Hint as the description; required state exposed -->
<label for="dob">Date of birth <span aria-hidden="true">*</span></label>
<input id="dob" type="text" required aria-describedby="dob-hint">
<div id="dob-hint">dd/mm/yyyy</div>

<!-- Error state: aria-invalid, error in the description, text cue not colour alone -->
<label for="date">Date</label>
<input id="date" type="text" aria-invalid="true" aria-describedby="date-hint date-error">
<div id="date-hint">dd/mm/yyyy</div>
<div id="date-error"><svg role="img" aria-label="Error:">...</svg> Enter a valid date.</div>
```
