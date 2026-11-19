---
title: "Acceptance Criteria: Page Language"
metadata:
  author: Intopia
  version: "1.0"
---
Page language defines the primary and any alternate human languages used in page content so assistive technologies can interpret text correctly.

### Semantic markup

- The primary language of the page is correctly identified and set on the `<html>` element. (WCAG 3.1.1)
- If part of the content is in a different language from the rest of the page, the element containing that content should use the `lang` attribute to indicate the correct language. (WCAG 3.1.2)
## Code examples

#### Pass

The primary language of the page is correctly identified and set on the `<html>` element.

<html lang="en">

If part of the content is in a different language from the rest of the page, the element containing that content should use the `lang` attribute to indicate the correct language.

<p>
  This sentence is mostly in English,
  but here’s a bit of French:
  <span lang="fr">C’est la vie</span>,
  and then we’re back to English.
</p>
