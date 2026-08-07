---
title: "Code example: Combobox"
metadata:
  author: Intopia
  version: "1.0"
---
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

* * *

#### No autocomplete

Suggestions do not respond to the typed text, so aria-autocomplete is "none".

```html
<input type="text" id="search" role="combobox"
       aria-expanded="false" aria-controls="recent-listbox"
       aria-autocomplete="none" aria-activedescendant="">
```

* * *

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

* * *

#### List and inline autocomplete

As for list autocomplete, with aria-autocomplete="both". The inline completion string after the cursor must be rendered as selected text so continued typing replaces it.

```html
<input type="text" id="state" role="combobox"
       aria-expanded="true" aria-controls="state-listbox"
       aria-autocomplete="both" aria-activedescendant="state-2">
```

* * *

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

* * *

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
