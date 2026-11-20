---
title: "Acceptance Criteria: Menu button"
metadata:
  author: Intopia
  version: "1.0"
---
A menu button is a button element that, when activated, opens a menu of actions, commands, or navigation links. It is part of the ARIA pattern for menu which is like a desktop application menu. It is intended to be implemented along with the specified keyboard controls.

In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### Semantic markup

- The menu button has aria-haspopup set to menu or true. (WCAG 4.1.2)
- The menu button's expanded or collapsed state is included in the accessibility tree. (WCAG 4.1.2)
- The element that contains the menu items has the menu role in the accessibility tree. (WCAG 4.1.2)
- The menu button has aria-controls set to the id of the menu popup element. (BP)

- When the menu is collapsed, it is not included in the accessibility tree. (WCAG 1.3.2)
- When the menu is expanded, it is included in the accessibility tree. (WCAG 1.3.2)
- The menu items come directly after the menu button in the accessibility tree. (WCAG 1.3.2)
- The menu items have the menuitem, menuitemcheckbox or menuitemradio role in the accessibility tree. (WCAG 4.1.2)
- If menuitemcheckbox or menuitemradio role is used, then the checked state via aria-checked is in the accessibility tree. (WCAG 4.1.2)
- If the menu item is disabled, the disabled state via aria-disabled is in the accessibility tree. (WCAG 4.1.2)
- If the menu item is selected, the selected state via aria-selected is in the accessibility tree. (WCAG 4.1.2)
- If the menu item has a submenu it has aria-haspopup set to menu or true. (WCAG 4.1.2)
- If the menu item has a submenu the expanded or collapsed state is included in the accessibility tree. (WCAG 4.1.2)
### Keyboard

- When the menu button is activated by Enter or Space, the menu opens and keyboard focus moves to the first menu item. (BP)

- The menu items are operable using a keyboard. (WCAG 2.1.1)
- The menu items are navigable using arrow keys. (BP)

- Pressing the Escape key when the menu is open closes the menu. (BP)

- Pressing the Tab key to move away from the menu closes the menu. (BP)

- When closing the menu using the keyboard focus is returned to the menu button. (WCAG 2.4.3)
