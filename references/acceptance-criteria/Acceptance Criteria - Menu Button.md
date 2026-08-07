---
title: "Acceptance Criteria: Menu button"
metadata:
  author: Intopia
  version: "1.0"
---
A menu button is a button element that, when activated, opens a menu of actions, commands, or navigation links. It is part of the ARIA pattern for menu which is like a desktop application menu. It is intended to be implemented along with the specified keyboard controls.

In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### Semantic markup

*   The menu button has aria-haspopup set to menu or true.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The menu button's expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The element that contains the menu items has the menu role in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   The menu button has aria-controls set to the id of the menu popup element.
    
    *   **Type:** Best Practice
        
*   When the menu is collapsed, it is not included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   When the menu is expanded, it is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   The menu items come directly after the menu button in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.2 Meaningful Sequence
        
*   The menu items have the menuitem, menuitemcheckbox or menuitemradio role in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   If menuitemcheckbox or menuitemradio role is used, then the checked state via aria-checked is in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   If the menu item is disabled, the disabled state via aria-disabled is in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   If the menu item is selected, the selected state via aria-selected is in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   If the menu item has a submenu it has aria-haspopup set to menu or true.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   If the menu item has a submenu the expanded or collapsed state is included in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
### Keyboard

*   When the menu button is activated by Enter or Space, the menu opens and keyboard focus moves to the first menu item.
    
    *   **Type:** Best practice
        
*   The menu items are operable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   The menu items are navigable using arrow keys.
    
    *   **Type:** Best practice
        
*   Pressing the Escape key when the menu is open closes the menu.
    
    *   **Type:** Best practice
        
*   Pressing the Tab key to move away from the menu closes the menu.
    
    *   **Type:** Best practice
        
*   When closing the menu using the keyboard focus is returned to the menu button.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
