---
title: "Acceptance Criteria: Drag and Drop"
metadata:
  author: Intopia
  version: "1.0"
---
Drag and drop lets a person move an item from one position to another, for example reordering a list or moving a card between columns. Each item is moved using a dedicated drag handle button.

Each drag handle is a button. In addition to the Interactive Control and Button acceptance criteria, the following acceptance criteria apply.

### **Labels and messaging**

*   The drag and drop component has visible instructions describing how to move an item using a keyboard.
    
    *   **Type:** Best practice
        
*   A status message is announced when an item is picked up.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.3 Status Messages
        
*   A status message is announced when a picked up item moves to a new position or drop zone.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.3 Status Messages
        
*   A status message is announced when an item is dropped, and states the item's new position.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.3 Status Messages
        
*   A status message is announced when a move is cancelled.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.3 Status Messages
        
### **Semantic markup**

*   The drag-and-drop region has an accessible name in the accessibility tree.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 4.1.2 Name, Role, Value
        
*   Each drag handle's accessible name identifies the item it moves (for example, "Move Task 1").
    
    *   **Type:** Best practice
        
*   Each drag handle button does not contain nested interactive elements, such as links or buttons.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.3.1 Info and Relationships
        
### **Keyboard**

*   The drag-and-drop functionality is fully operable using a keyboard.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.1.1 Keyboard
        
*   When focus is on a drag handle, pressing Enter or Space picks up the item.
    
    *   **Type:** Best practice
        
*   When an item is picked up, pressing the arrow keys moves it to another position or drop zone.
    
    *   **Type:** Best practice
        
*   When an item is picked up, pressing Enter or Space drops it in its current position.
    
    *   **Type:** Best practice
        
*   When an item is picked up, pressing Escape cancels the move and returns the item to its original position.
    
    *   **Type:** Best practice
        
*   When an item is dropped or the move is cancelled, focus stays on that item's drag handle.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.4.3 Focus Order
        
### **Pointer**

*   All functionality that uses a dragging movement can also be operated with a single pointer without dragging (for example, tapping the drag handle to pick the item up, then tapping the destination, or via a menu).
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 2.5.7 Dragging Movements
        
### **Visual design**

*   A visual indicator shows when an item is picked up.
    
    *   **Type:** Best practice
        
*   A visual indicator shows when a drop zone is dragged over or focused.
    
    *   **Type:** Best practice
        
*   Visual indicators for the picked up and dragged over states have a contrast ratio of at least 3:1 against adjacent colours.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.11 Non-text Contrast
        
### **Adaptive UI**

*   The component can be viewed at smaller screen widths (320px) without loss of content or functionality. The user does not have to scroll horizontally to use it.
    
    *   **Type:** WCAG
        
    *   **Success Criteria:** 1.4.10 Reflow
