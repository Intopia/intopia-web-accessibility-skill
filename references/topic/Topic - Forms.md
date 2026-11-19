---
title: "Topic: Forms"
metadata:
  author: Intopia
  version: "1.1"
---
# Forms

## Labels and structure
- Every input has a visible `<label>` linked with `for`/`id` (not wrapping alone). Never use `placeholder` as the label. Exception: a search field may use a search icon as its visible label if the field has an accessible name such as "Search".
- Group related inputs (radios, checkboxes, date parts, address) in `<fieldset>` with `<legend>`.
- Use the right `type` (`email`, `tel`, `number`, `date`, `password`, `search`, `url`) and `autocomplete` on personal data fields (WCAG 1.3.5), for example `given-name`, `email`, `new-password`.

## Required fields
- Mark required fields visually and programmatically (`required`, or `aria-required="true"` on custom controls).

## Hints
- Link hints with `aria-describedby`. Hints are persistent visible text, not placeholder or tooltip content.
- If help for a field also sits in a toggletip, the field's description must still include all of it, not a summary.

## Errors
- Add `novalidate` and show custom inline errors; don't rely on browser validation bubbles.
- Each error names the field and how to fix it ("Enter your first name", not "This field is required"), and is visible text, not colour or icon alone.
- Set `aria-invalid="true"` on invalid inputs and link the error with `aria-describedby`. Put the hint before the error in the DOM so it's read first.
- On a failed submit, move focus to an error summary or the first invalid field. Don't put `role="alert"` or `aria-live="assertive"` on a container that receives focus.

```html
<label for="email">Email address</label>
<input type="email" id="email" autocomplete="email" required aria-invalid="true" aria-describedby="email-hint email-error">
<p id="email-hint">We'll never share your email.</p>
<p id="email-error">Enter a valid email address.</p>
```

## Disabled and read-only
- `disabled` removes the field from the tab order; use it only when it truly can't be used. `readonly` keeps it focusable and submitted.
- Don't mark a field both `disabled` and `required`. Don't disable the submit button to signal an incomplete form; keep it enabled and show errors on submit.
