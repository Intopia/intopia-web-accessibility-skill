---
title: "Code example: List"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

If the order of the list items is important, such as a list of instructions, then the related items are in an ordered list.

<ol>
  <li>First step: Prepare ingredients.</li>
  <li>Second step: Mix all dry ingredients.</li>
  <li>Third step: Add wet ingredients and stir until combined.</li>
</ol>

**Note:** The ARIA `list` / `listitem` roles don't distinguish between ordered and unordered lists. Assistive technologies treat them as unordered lists.

* * *

If the order of the list items is not critical to understanding the content, then the related items are in an unordered list.

<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>

**ARIA List sample**

<div role="list">
  <div role="listitem">Apples</div>
  <div role="listitem">Bananas</div>
  <div role="listitem">Oranges</div>
</div>

* * *

If the list items contain terms and definitions, then the related items are in a description list.

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in a markup language.</dd>
</dl>

