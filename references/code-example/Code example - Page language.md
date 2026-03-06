---
title: "Code example: Page language"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The primary language of the page is correctly identified and set on the `<html>` element.

<html lang="en">

* * *

If part of the content is in a different language from the rest of the page, the element containing that content should use the `lang` attribute to indicate the correct language.

<p>
  This sentence is mostly in English,
  but hereâ€™s a bit of French:
  <span lang="fr">Câ€™est la vie</span>,
  and then weâ€™re back to English.
</p>

