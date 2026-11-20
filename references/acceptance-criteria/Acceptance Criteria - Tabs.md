---
title: "Acceptance Criteria: Tabs"
metadata:
  author: Intopia
  version: "1.1"
---
A tab component is a list of tabs (the tab list) with an associated tab panel for each tab, where activating a tab displays its tab panel and hides the others.

In addition to the Interactive Control acceptance criteria (`references/acceptance-criteria/Acceptance Criteria - Interactive Control.md`), the following acceptance criteria apply.

### Labels and messaging
- Each tab has a visible label that describes the content of its associated tab panel. (WCAG 2.4.6)
### Semantic markup
- The container for the tabs has the tablist role in the accessibility tree. (WCAG 4.1.2)
- Each tab has the tab role in the accessibility tree. (WCAG 4.1.2)
- Each tab panel has the tabpanel role in the accessibility tree. (WCAG 4.1.2)
- The tab's selected and not selected state is included in the accessibility tree. (WCAG 4.1.2)
- Each tab has aria-controls set to the id of its associated tab panel. (BP)
- Each tab panel's accessible name is included in the accessibility tree, usually by setting aria-labelledby to the id of its controlling tab. (WCAG 4.1.2)
- When a tab panel is selected, it is included in the accessibility tree. (WCAG 1.3.2)
- When a tab panel is not selected, it is not included in the accessibility tree. (WCAG 1.3.2)
### Keyboard
- The tabs are operable using a keyboard. (WCAG 2.1.1)
- Only the selected tab is in the page's tab order. All other tabs are removed from the tab order. (BP)
- When focus is on a tab within the tab list, the Left and Right arrow keys (for horizontal tabs) or the Up and Down arrow keys (for vertical tabs) move focus between tabs. (BP)
- If the tabs use manual activation, pressing the Enter or Space key on a tab activates it. (BP)
- When a tab is activated, its associated tab panel is displayed. (WCAG 2.1.1)
- When a tab is activated, focus remains on the activated tab. (WCAG 2.4.3)
### Visual design
- The selected tab does not rely on colour alone to indicate that it is selected. (WCAG 1.4.1)
### Adaptive UI
- The tab component can be viewed at smaller screen widths (320px) without loss of content or functionality, and without requiring horizontal scrolling. Tabs and panels reflow or stack as needed. (WCAG 1.4.10)
