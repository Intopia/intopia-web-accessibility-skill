---
title: "Code example: Button"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

##### For a button with a visible text label.

The button has a visible label that describes the action it performs.

<button>Submit</button>

* * *

The button's accessible name matches its visible label exactly, or at least starts with the exact text of the visible label.

<button aria-label="Delete item 1">Delete</button>

* * *

The button's accessible name is included in the accessibility tree.

<button>Submit</button>

<button aria-label="submit"></button>

* * *

The button's role is included in the accessibility tree.

<button></button>

<div role="button"></div>

* * *

If the button is disabled, the button's disabled state is included in the accessibility tree.

<button disabled>Submit</button>

<div role="button" aria-disabled="true">Submit</div>

* * *

The button is activated by pressing the Space or Enter keys on the keyboard.

<button>Submit</button>

<div role="button" tabindex="0">Submit</div>

##### For Icon Buttons

The icon (image) is not included in the accessibility tree.

<button aria-label="Submit"><img alt="" src="/path" /></button>

<button aria-label="Submit"><svg aria-hidden="true" focusable="false">...</svg></button>

##### For Icon Buttons with Text

The icon (image) is not included in the accessibility tree.

<button>Submit<img alt="" src="/path" /></button>

<button>Submit<svg aria-hidden="true" focusable="false">...</svg></button>

##### For Toggle Buttons

The button's pressed and not pressed state is included in the accessibility tree.

<button aria-pressed="true">Mute</button>

