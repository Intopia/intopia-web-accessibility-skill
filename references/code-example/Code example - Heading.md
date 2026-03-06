---
title: "Code example: Heading"
metadata:
  author: Intopia
  version: "1.0"
---
#### Pass

The H1 describes the overall topic of the page.

<h1>About Our Services</h1>

* * *

The section headings concisely describe the topic or purpose of the content that follows them.

<h2>How We Can Help You</h2>
<p>Details about our services...</p>

<h3>Our Approach to Customer Support</h3>
<p>Information on how we support our customers...</p>

* * *

The heading follows a logical hierarchy; for example, H3 is used for subheadings under H2.

<h1>Our Company Blog</h1>
<article>
  <h2>Latest News</h2>
  <p>Summary of recent company updates.</p>

  <h3>Product Launches</h3>
  <p>Details about our newest products.</p>

  <h3>Company Events</h3>
  <p>Information on upcoming and past events.</p>
</article>

* * *

Heading levels do not skip; for example, the sequence should not jump from H2 directly to H4.

**Correct Example:**

<h1>Main Page Title</h1>
<section>
  <h2>Primary Section Heading</h2>
  <p>Content for the primary section.</p>

  <h3>Subsection Heading</h3>
  <p>Content for the subsection.</p>

  <h4>Sub-subsection Detail</h4>
  <p>More detailed content.</p>
</section>

**Incorrect Example (to avoid):**

<h1>Main Page Title</h1>
<section>
  <h2>Primary Section Heading</h2>
  <p>Content for the primary section.</p>

  <!-- This skips H3, which should be avoided -->
  <h4>Sub-subsection Detail</h4>
  <p>More detailed content.</p>
</section>

