---
title: "Acceptance Criteria: Button"
metadata:
  author: Intopia
  version: "1.1"
---
A button is an interactive element activated by a person using a mouse, keyboard, touch, voice command or other assistive technology. Once activated, it then performs an action or event, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation.

In addition to the Interactive Control acceptance criteria, the following acceptance criteria apply.

### For a button with a visible text label.

#### **Labels and messaging**

*   The button has a visible label.

    *   **Type:** WCAG

    *   **Success Criteria:** 3.3.2 Labels or Instructions.

*   The button's label describes the action it performs.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.6 Headings and Labels.

#### **Semantic markup**

*   The button has the button role in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value.

*   If the button is disabled, the button's disabled state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value.

#### **Keyboard**

*   The button is activated by pressing the Space or Enter keys on the keyboard.

    *   **Type:** WCAG

    *   **Success Criteria:** 2.1.1 Keyboard.

*   When activating the button moves focus, focus moves to a location that keeps the focus order logical and meaningful (for example, to an error summary or the first invalid field when submitting an invalid form).

    *   **Type:** WCAG

    *   **Success Criteria:** 2.4.3 Focus Order.

### For Icon Buttons

An icon button is a type of button that uses only an icon to represent its purpose or action. It does not have a visible text label.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### **Labels and messages**

*   The button uses a recognisable icon for its label, such as a magnifying glass for a Search button or three horizontal bars for a Menu button.

    *   **Type:** Best practice

*   If the icon is not well known, the label appears in a tooltip when the user hovers over the button or navigates to it using a keyboard.

    *   **Type:** Best practice

### For Icon Buttons with Text

An icon button with a text label has both an icon and a text label that describes its purpose or action.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### **Labels and messages**

*   The icon (image) is not included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 1.1.1 Non-Text Content.

### For Toggle Buttons

A toggle button is a type of button that lets users switch between two states off (not pressed) or on (pressed).

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### **Semantic markup**

*   The button's pressed and not pressed state is included in the accessibility tree.

    *   **Type:** WCAG

    *   **Success Criteria:** 4.1.2 Name, Role, Value.

**Important:** it is critical the label on a toggle does not change when its state changes. In this example, when the pressed state is true, the label remains "Mute" so a screen reader would say something like "Mute toggle button pressed". Alternatively, if the design were to call for the button label to change from "Mute" to "Unmute," the aria-pressed attribute would not be needed.
