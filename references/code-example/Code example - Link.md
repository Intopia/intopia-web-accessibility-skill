---
title: "Code example: Link"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The link's accessible name is included in the accessibility tree.

<a href="/path">Contact us</a>

<a aria-label="Contact us" href="/path">...</a>

* * *

The link's role is included in the accessibility tree.

<a href="/path">Contact us</a>

<button role="link">Contact us</button>

* * *

When the current state is communicated visually, then the state is included in the accessibility tree.

<a href="/path" aria-current="page">Contact us</a>

<a href="/path" aria-current="true">Contact us</a>

* * *

The link is focusable using the Tab key on the keyboard.

<a href="/path">Contact us</a>

<div role="link" tabindex="0">Contact us</div>

