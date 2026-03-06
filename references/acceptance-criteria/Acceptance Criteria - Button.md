---
title: "Acceptance Criteria: Button"
metadata:
  author: Intopia
  version: "1.0"
---
A button is an interactive element activated by a person using a mouse, keyboard, touch, voice command or other assistive technology. Once activated, it then performs an action or event, such as submitting a form, opening a dialog, cancelling an action or performing a delete operation.

### For a button with a visible text label.

#### **Labels and messaging**

*   The button has a visible label that describes the action it performs.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.6 Headings and Labels.
        
#### **Semantic markup**

*   The button's accessible name matches its visible label exactly, or at least starts with the exact text of the visible label.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.5.3 Label in Name.
        
*   The button's accessible name is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value.
        
*   The button's role is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value.
        
*   If the button is disabled, the button's disabled state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value.
        
#### **Keyboard**

*   The button is activated by pressing the Space or Enter keys on the keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard.
        
*   When the button is activated, focus remains on the button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order.
        
*   The button has a clear focus style when it receives focus using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.7 Focus Visible.
        
*   When the button receives focus using a keyboard, the button is not completely hidden by other content, such as a popup menu or tooltip.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.11 Focus Not Obscured (Minimum).
        
#### **Visual design**

*   The button's label meets the minimum contrast ratio of 4.5:1 against the background colour, or 3:1 for large-scale text (24px or 18.5px and bold). Note, if the button is disabled in HTML it does not need to meet contrast requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.3 Contrast (Minimum).
        
*   If the button uses a custom focus style, then the focus style has a contrast ratio of 3:1 against the background colour.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast.
        
#### **Adaptive UI**

*   The button's label can be increased up to 200% without being truncated, overlapping other text, or being cut off.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.4 Resize Text.
        
*   Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.12 Text Spacing.
        
### For Icon Buttons

An icon button is a type of button that uses only an icon to represent its purpose or action. It does not have a visible text label.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### **Labels and messages**

*   The button uses a recognisable icon for its label, such as a magnifying glass for a Search button or three horizontal bars for a Menu button.
    
    *   **Type:** Best practice
        
*   If the icon is not well known, the label appears in a tooltip when the user hovers over the button or navigates to it using a keyboard.
    
    *   **Type:** Best practice
        
An icon button with a text label has both an icon and a text label that describes its purpose or action.

In addition to acceptance criteria for button, the following acceptance criteria apply.

#### **Labels and messages**

*   The icon (image) is not included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.1.1 Non-Text Content.
        
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