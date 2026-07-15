---
title: "Topic: Forms"
metadata:
  author: Intopia
  version: "1.0"
---
# Forms

Load this topic for any form, input, control, or validation: labels, fieldsets, input types, autocomplete, required fields, hints, error handling, and disabled/read-only states.

## Structure and Labels

- Use `<label>` for every input. Associate explicitly with `for`/`id`; do not rely on wrapping alone.
- Use `<fieldset>` and `<legend>` for grouped inputs (radio groups, checkboxes, date field sets, address field sets).
- Never use `placeholder` as a substitute for a `<label>`. Placeholder text disappears on input, has insufficient contrast by default, and is not reliably announced by screen readers. **Exception:** A Search icon is a valid visual label for a search field providing the field has an accessible name e.g. Search.

## Input Types

- Use the correct `type` attribute: `email`, `tel`, `number`, `date`, `password`, `search`, `url`. This provides appropriate keyboards on mobile and semantic meaning.
- Use `autocomplete` attributes for personal data fields (e.g. `autocomplete="given-name"`, `autocomplete="email"`, `autocomplete="current-password"`). Required by WCAG 1.3.5.

## Required Fields

- Mark required fields both visually and programmatically.
- Use `required` and `aria-required="true"` on the input.

```
<label for="name">Full name <span aria-hidden="true">*</span></label> <input type="text" id="name" name="name" required aria-required="true" autocomplete="name">
```

## Hints and Descriptions

- Use `aria-describedby` to associate hints, constraints, or instructions with an input.
- Place the hint element before the error message in the DOM so it is read first.
- Hints must be persistent visible text, not placeholder or tooltip content.

## Form Error Handling

- Do not rely on browser-native constraint validation (e.g. `required`, `type="email"` default popups). Always provide custom inline error messages.
- Error messages must include the field name and a resolution instruction (e.g. "Enter your first name", not "This field is required").
- Use `aria-invalid="true"` on inputs with validation errors.
- Use `aria-describedby` to associate the error message with the input.
- Error messages must be visible text, not colour or icon alone.
- On submission failure, move focus to the first error or an error summary at the top of the form.
- Do not use `role="alert"` or `aria-live="assertive"` on error containers when focus is already being moved to the error.

```
<label for="email">Email address</label> <input  type="email"  id="email"  name="email"  required  aria-required="true"  aria-invalid="true"  aria-describedby="email-hint email-error" > <p id="email-hint">We'll never share your email.</p> <p id="email-error">Enter a valid email address.</p>
```

## Disabled and Read-only States

- `disabled`: removes the element from the tab order and prevents interaction. Use only when the field genuinely cannot be used.
- `readonly`: keeps the field focusable and its value submittable. Use when the value is visible but should not be changed.
- Do not mark a field as both `disabled` and `required`.
- Avoid disabling the submit button to signal an incomplete form. Keep it enabled and surface errors on submit instead.
