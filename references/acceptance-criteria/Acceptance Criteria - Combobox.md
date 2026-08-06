---
title: "Acceptance Criteria: Combobox"
metadata:
  author: Intopia
  version: "1.0"
---
A combobox is an input field combined with a list of options. People set its value by typing, by choosing an option from the listbox, or both.

These criteria apply to every editable, single-select combobox, written for the common case of a listbox. Pick the variant below and apply this file together with the variant's file; the grid popup and date picker variants state which listbox criteria they replace.

For a select-only combobox (no text entry, but type-ahead moves focus to the first option starting with the typed character), see Acceptance Criteria: Select

### **Choosing a variant**

**Autocomplete behaviour** (how options respond to typing):

| Variant | Use when |
| :------ | :------- |
| Combobox (no autocomplete) | Options are independent of the typed text: recent searches, popular picks, a fixed shortlist. |
| Combobox (list autocomplete) | **Default.** Typing filters the list; nothing commits until the user chooses. Its "With automatic selection" section covers committing the top match on blur, for example airport codes. |
| Combobox (list and inline autocomplete) | Power-user speed with predictable values, such as browser-style URL completion. The most complex variant. |

**Popup type** (independent of the above): a flat listbox is the default and needs nothing extra.

| Popup | Add |
| :---- | :-- |
| Grid of options, where each needs extra columns such as a name plus a category | Combobox (grid popup), on top of list autocomplete |
| Calendar dialog for a date | Combobox (date picker), plus Modal Dialog |

### **Labels and messaging**

*   The combobox has a permanent visible label. It does not use placeholder text for its label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   The combobox's label describes the choice being made.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels

*   If the combobox requires text in a specific format, instructions are provided.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify when the combobox is required.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions

*   There is a visible way to identify when the combobox is disabled.

    *   **Type:** Best practice

*   When the combobox has invalid data, the error message describes the issue.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.1 Error Identification

*   The error message includes how to fix the issue where possible.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.3 Error Suggestion

*   The error message is close to the combobox.

    *   **Type:** Best practice

### **Semantic markup**

*   The combobox has the combobox role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The combobox's accessible name is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The combobox's value is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The combobox's expanded or collapsed state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   If instructions are provided, they are exposed as the combobox's accessible description in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The list of options has the listbox role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each option has the option role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   Each option's accessible name is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The option that has visual focus is programmatically determinable (via aria-activedescendant on the combobox).

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The selected option's state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The combobox is programmatically associated with its listbox.

    *   **Type:** Best practice

*   The combobox indicates its autocomplete behaviour (aria-autocomplete set to none, list or both, matching the actual behaviour).

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The required state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

*   The disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value

*   The error message is the accessible description and included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.3.1 Info and Relationships

### **Keyboard**

*   The combobox is focusable using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   People can enter a value into the combobox using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   People can open the listbox and choose an option using only a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard

*   Pressing the Down arrow key opens the listbox and moves visual focus to the first option.

    *   **Type:** Best practice

*   Pressing the up and down arrow keys when the listbox is open moves visual focus through the options.

    *   **Type:** Best practice

*   While navigating options, people can return to the text and keep editing without losing their typed value (DOM focus stays on the input; arrow keys move only the visual focus).

    *   **Type:** Best practice

*   Pressing the Enter key when an option has visual focus sets the combobox's value to that option and closes the listbox.

    *   **Type:** Best practice

*   Pressing the Escape key when the listbox is open closes the listbox without changing the combobox's value.

    *   **Type:** Best practice

*   Pressing the Tab key to move away from the combobox closes the listbox.

    *   **Type:** Best practice

*   If the combobox has a separate open (arrow) button, the button is not in the Tab order because it duplicates the combobox's keyboard interface, but it remains available to touch and mobile assistive technology.

    *   **Type:** Best practice

*   Focusing the combobox does not trigger an unexpected change in context, such as moving focus to a new location, loading a new page or opening a modal.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.1 On Focus

*   Typing into the combobox or choosing an option does not trigger an unexpected change in context.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.2.2 On Input

*   The combobox has a focus style when it receives focus using a keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.7 Focus Visible

*   The option with visual focus has a focus style.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.7 Focus Visible

*   The option with visual focus is scrolled into view.

    *   **Type:** Best practice

### **Visual design**

*   If the combobox or the options use a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

*   The combobox's outline and open (arrow) icon have a contrast ratio of 3:1 against the background colours.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.11 Non-text Contrast

*   All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold). This applies to the typed value, the label, the description, the error message and the options in all states (default, focus, hover, error). Note, if the combobox is disabled it does not need to meet contrast requirements.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.3 Contrast (Minimum)

*   The option with visual focus is identified by more than colour alone, for example a border or background change with sufficient contrast.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.1 Use of Colour

### **Adaptive UI**

*   The combobox and its listbox can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.10 Reflow

*   Text can be increased up to 200% without text overlapping, truncating or being cut off.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.4 Resize Text

*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.4.12 Text Spacing
