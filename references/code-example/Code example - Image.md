---
title: "Code example: Image"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The image's role is included in the accessibility tree.

<img src="/path" alt="Description of the image" />

<svg role="img" aria-label="Description of the image" />

* * *

The image's text alternative is included as the accessible name in the accessibility tree.

<img src="/path" alt="Description of the image" />

<svg role="img" aria-label="Description of the image" />

* * *

**If the image is decorative:** The image is purely decorative. It is not included in the accessibility tree.

<img src="/path" alt="" />

<svg aria-hidden="true" focusable="false" />

