---
title: "Acceptance Criteria: Combobox"
metadata:
  author: Intopia
  version: "1.0"
---
A combobox is an input field combined with a list of options. People set its value by typing, by choosing an option from the listbox, or both.

These criteria apply to every editable, single-select combobox, written for the common case of a listbox. Pick the variant below and apply this file together with the variant's file; the grid popup and date picker variants state which listbox criteria they replace.

For a select-only combobox (no text entry, but type-ahead moves focus to the first option starting with the typed character), see Acceptance Criteria: Select

### Choosing a variant

Autocomplete behaviour (how options respond to typing). This base file is already loaded; also load the variant file(s) in the **Load** column, in order:

| Variant | Use when | Load |
| --- | --- | --- |
| Combobox (no autocomplete) | Options are independent of the typed text: recent searches, popular picks, a fixed shortlist. | `references/acceptance-criteria/Acceptance Criteria - Combobox (no autocomplete).md` |
| Combobox (list autocomplete) | Default. Typing filters the list; nothing commits until the user chooses. Its "With automatic selection" section covers committing the top match on blur, for example airport codes. | `references/acceptance-criteria/Acceptance Criteria - Combobox (list autocomplete).md` |
| Combobox (list and inline autocomplete) | Power-user speed with predictable values, such as browser-style URL completion. The most complex variant. | `references/acceptance-criteria/Acceptance Criteria - Combobox (list autocomplete).md`, then `references/acceptance-criteria/Acceptance Criteria - Combobox (list and inline autocomplete).md` |

Popup type (independent of the above): a flat listbox is the default and needs nothing extra.

| Popup | Load |
| --- | --- |
| Grid of options, where each needs extra columns such as a name plus a category | `references/acceptance-criteria/Acceptance Criteria - Combobox (list autocomplete).md`, then `references/acceptance-criteria/Acceptance Criteria - Combobox (grid popup).md` |
| Calendar dialog for a date | `references/acceptance-criteria/Acceptance Criteria - Combobox (date picker).md`, plus `references/acceptance-criteria/Acceptance Criteria - Modal Dialog.md` |

### Labels and messaging
- The combobox has a permanent visible label. It does not use placeholder text for its label. (WCAG 3.3.2)
- The combobox's label describes the choice being made. (WCAG 2.4.6)
- If the combobox requires text in a specific format, instructions are provided. (WCAG 3.3.2)
- There is a visible way to identify when the combobox is required. (BP)
- There is a visible way to identify when the combobox is disabled. (BP)
- When the combobox has invalid data, the error message describes the issue. (WCAG 3.3.1)
- The error message includes how to fix the issue where possible. (WCAG 3.3.3)
- The error message is visually close to the combobox. (BP)

### Semantic markup
- The combobox has the combobox role in the accessibility tree. (WCAG 4.1.2)
- The combobox's accessible name is included in the accessibility tree. (WCAG 4.1.2)
- The combobox's value is included in the accessibility tree. (WCAG 4.1.2)
- The combobox's expanded or collapsed state is included in the accessibility tree. (WCAG 4.1.2)
- If instructions are provided, they are exposed as the combobox's accessible description in the accessibility tree. (WCAG 1.3.1)
- The list of options has the listbox role in the accessibility tree. (WCAG 4.1.2)
- Each option has the option role in the accessibility tree. (WCAG 4.1.2)
- Each option's accessible name is included in the accessibility tree. (WCAG 4.1.2)
- The option that has visual focus is programmatically determinable (via aria-activedescendant on the combobox). (WCAG 1.3.1)
- The selected option's state is included in the accessibility tree. (WCAG 4.1.2)
- The combobox is programmatically associated with its listbox. (BP)
- The combobox indicates its autocomplete behaviour (aria-autocomplete set to none, list or both, matching the actual behaviour). (WCAG 4.1.2)
- If indicated visually, the required state is included in the accessibility tree. (WCAG 1.3.1)
- The disabled state is included in the accessibility tree. (WCAG 4.1.2)
- The error message is the accessible description and included in the accessibility tree. (WCAG 1.3.1)
### Keyboard
- The combobox is focusable using a keyboard. (WCAG 2.1.1)
- People can enter a value into the combobox using a keyboard. (WCAG 2.1.1)
- People can open the listbox and choose an option using only a keyboard. (WCAG 2.1.1)
- Pressing the Down arrow key opens the listbox and moves visual focus to the first option. (BP)
- Pressing the up and down arrow keys when the listbox is open moves visual focus through the options. (BP)
- While navigating options, people can return to the text and keep editing without losing their typed value (DOM focus stays on the input; arrow keys move only the visual focus). (BP)
- Pressing the Enter key when an option has visual focus sets the combobox's value to that option and closes the listbox. (BP)
- Pressing the Escape key when the listbox is open closes the listbox without changing the combobox's value. (BP)
- Pressing the Tab key to move away from the combobox closes the listbox. (BP)
- If the combobox has a separate open (arrow) button, the button is not in the Tab order because it duplicates the combobox's keyboard interface, but it remains available to touch and mobile assistive technology. (BP)
- Focusing the combobox does not trigger an unexpected change in context, such as moving focus to a new location, loading a new page or opening a modal. (WCAG 3.2.1)
- Typing into the combobox or choosing an option does not trigger an unexpected change in context. (WCAG 3.2.2)
- The combobox has a focus style when it receives focus using a keyboard. (WCAG 2.4.7)
- The option with visual focus has a focus style. (WCAG 2.4.7)
- The option with visual focus is scrolled into view. (BP)

### Visual design
- If the options use a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
- The combobox's outline and open (arrow) icon have a contrast ratio of 3:1 against the background colours. (WCAG 1.4.11)
- The option with visual focus is identified by more than colour alone, for example a border or background change with sufficient contrast. (WCAG 1.4.1)
### Adaptive UI
- The combobox and its listbox can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it. (WCAG 1.4.10)
## Code examples

Structures from the WAI-ARIA APG combobox pattern, one per variant. Every editable variant builds on the base structure. Use with the matching acceptance criteria file, and see "Acceptance Criteria - Combobox" to pick a variant.

#### Base structure

The listbox popup, with a label, a non-tabbable open button and aria-activedescendant tracking visual focus.

```html
<label for="destination">Destination</label>
<div class="combobox-wrapper">
  <input type="text" id="destination" role="combobox"
         aria-expanded="false" aria-controls="destination-listbox"
         aria-autocomplete="list" aria-activedescendant="">
  <button type="button" tabindex="-1" aria-label="Destination"
          aria-expanded="false" aria-controls="destination-listbox">
    <svg aria-hidden="true" focusable="false"><!-- arrow --></svg>
  </button>
  <ul id="destination-listbox" role="listbox" aria-label="Destinations" hidden>
    <li id="dest-1" role="option">Adelaide</li>
    <li id="dest-2" role="option" aria-selected="true">Melbourne</li>
    <li id="dest-3" role="option">Sydney</li>
  </ul>
</div>
```

#### No autocomplete

Suggestions do not respond to the typed text, so aria-autocomplete is "none".

```html
<input type="text" id="search" role="combobox"
       aria-expanded="false" aria-controls="recent-listbox"
       aria-autocomplete="none" aria-activedescendant="">
```

#### List autocomplete

Typing filters the suggestions, and a status region announces the result count.

```html
<input type="text" id="state" role="combobox"
       aria-expanded="true" aria-controls="state-listbox"
       aria-autocomplete="list" aria-activedescendant="state-2">
<ul id="state-listbox" role="listbox" aria-label="States">
  <li id="state-1" role="option">New South Wales</li>
  <li id="state-2" role="option" aria-selected="true">Northern Territory</li>
</ul>
<div role="status" class="visually-hidden">2 results available.</div>
```

#### List and inline autocomplete

As for list autocomplete, with aria-autocomplete="both". The inline completion string after the cursor must be rendered as selected text so continued typing replaces it.

```html
<input type="text" id="state" role="combobox"
       aria-expanded="true" aria-controls="state-listbox"
       aria-autocomplete="both" aria-activedescendant="state-2">
```

#### Grid popup

The popup is a grid, so aria-activedescendant references a gridcell rather than an option.

```html
<input type="text" id="fruit" role="combobox"
       aria-haspopup="grid" aria-expanded="true"
       aria-controls="fruit-grid" aria-autocomplete="list"
       aria-activedescendant="fruit-cell-1-1">
<div id="fruit-grid" role="grid" aria-labelledby="fruit-label">
  <div role="row">
    <div id="fruit-cell-1-1" role="gridcell" aria-selected="true">Apple</div>
    <div id="fruit-cell-1-2" role="gridcell">Fruit</div>
  </div>
  <div role="row">
    <div id="fruit-cell-2-1" role="gridcell">Asparagus</div>
    <div id="fruit-cell-2-2" role="gridcell">Vegetable</div>
  </div>
</div>
```

#### Date picker

The popup is a modal dialog containing a calendar grid, so DOM focus moves into the dialog and there is no aria-activedescendant.

```html
<label for="dob">Date of birth</label>
<span id="dob-format">Date format: dd/mm/yyyy</span>
<input type="text" id="dob" role="combobox"
       aria-haspopup="dialog" aria-expanded="false"
       aria-controls="dob-dialog" aria-describedby="dob-format">
<button type="button" tabindex="-1" aria-label="Choose date"
        aria-expanded="false" aria-controls="dob-dialog">
  <svg aria-hidden="true" focusable="false"><!-- calendar --></svg>
</button>
<div id="dob-dialog" role="dialog" aria-modal="true" aria-label="Choose date" hidden>
  <h2 id="dob-month" aria-live="polite">July 2026</h2>
  <button type="button" aria-label="Previous month">…</button>
  <button type="button" aria-label="Next month">…</button>
  <table role="grid" aria-labelledby="dob-month">
    <thead><tr><th abbr="Monday">Mo</th><!-- … --></tr></thead>
    <tbody><tr><td tabindex="-1">1</td><td tabindex="0" aria-selected="true">2</td><!-- … --></tr></tbody>
  </table>
  <button type="button">Cancel</button>
  <button type="button">OK</button>
</div>
```
