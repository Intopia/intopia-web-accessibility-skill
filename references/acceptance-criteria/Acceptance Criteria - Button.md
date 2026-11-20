---
title: "Acceptance Criteria: Button"
metadata:
  author: Intopia
  version: "1.1"
---
A button is an interactive element activated by a person using a mouse, keyboard, touch, voice command or other assistive technology. Once activated, it then performs an action or event, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### For a button with a visible text label.

#### Labels and messaging
- The button has a visible label. (WCAG 3.3.2)
- The button's label describes the action it performs. (WCAG 2.4.6)
- If the button uses an icon without visible text, the icon is recognisable, or its purpose is conveyed via a tooltip on hover and focus. See the Tooltip acceptance criteria. (BP)

#### Semantic markup
- The button has the button role in the accessibility tree. (WCAG 4.1.2)
- If the button is disabled, the button's disabled state is included in the accessibility tree. (WCAG 4.1.2)
#### Keyboard
- The button is activated by pressing the Space or Enter keys on the keyboard. (WCAG 2.1.1)
- When activating the button moves focus, focus moves to a location that keeps the focus order logical and meaningful (for example, to an error summary or the first invalid field when submitting an invalid form). (WCAG 2.4.3)
### For Icon Buttons

An icon button is a type of button that uses only an icon to represent its purpose or action. It does not have a visible text label.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### Labels and messages
- The button uses a recognisable icon for its label, such as a magnifying glass for a Search button or three horizontal bars for a Menu button. (BP)
- If the icon is not well known, the label appears in a tooltip when the user hovers over the button or navigates to it using a keyboard. (BP)

### For Icon Buttons with Text

An icon button with a text label has both an icon and a text label that describes its purpose or action.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### Labels and messages
- The icon (image) is not included in the accessibility tree. (WCAG 1.1.1)
### For Toggle Buttons

A toggle button is a type of button that lets users switch between two states off (not pressed) or on (pressed).

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### Semantic markup
- The button's pressed and not pressed state is included in the accessibility tree. (WCAG 4.1.2)
**Important:** it is critical the label on a toggle does not change when its state changes. In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed". Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.

## Code examples

```html
<!-- Label-in-name: accessible name starts with the visible text -->
<button aria-label="Delete item 1">Delete</button>

<!-- Icon-only button: name on the button, icon hidden -->
<button type="button" aria-label="Search"><svg aria-hidden="true" focusable="false">...</svg></button>

<!-- Icon plus text: icon hidden -->
<button type="button">Submit <svg aria-hidden="true" focusable="false">...</svg></button>

<!-- Disabled but still focusable, so the reason can be found -->
<button type="submit" aria-disabled="true" aria-describedby="why">Submit</button>

<!-- Toggle: label stays the same, state changes -->
<button type="button" aria-pressed="true">Mute</button>
```
