---
title: "Acceptance Criteria: Table"
metadata:
  author: Intopia
  version: "1.0"
---
A table is a static tabular structure used to present data in rows and columns. It is not an interactive widget itself, meaning its cells are not focusable or selectable. However, tables often contain interactive widgets within their cells. For interactive tabular data where cells themselves are interactive or selectable, the Grid pattern should be considered instead. **Authors are strongly encouraged to use native HTML table elements whenever possible** due to their inherent accessibility and broad support.

### Labels and messaging

- The caption describes the overall topic of the table. (BP)

- The summary describes how the data is organised. (BP)

- The column headers describe the content of the columns. (WCAG 1.3.1)
- None of the table header cells are blank. (BP)

### Semantic markup

- The caption is correctly associated with the table in the accessibility tree, with the table being labelled by the caption element. (WCAG 1.3.1)
- The summary is programmatically associated with the table. (WCAG 1.3.1)
- The column headers are programmatically associated with the data cells they describe. (WCAG 1.3.1)
- For tables with irregular headers, the header cells are programmatically associated with the data cells they describe. (WCAG 1.3.1)
- The table is correctly marked up so that information is provided to assistive technology users in the correct reading order. (WCAG 1.3.2)
### Visual design

- The table uses styling to differentiate the header cells from the data cells. (BP)

- All text meets the minimum contrast ratio of 4.5:1 against the background colours, or 3:1 for large-scale text (24px or 18.5px and bold). (WCAG 1.4.3)
### Adaptive UI

- The table can be viewed at smaller screen widths (320px) without loss of content or functionality. Tables are allowed to scroll horizontally when needed. See 1.4.10 Reflow for exact requirements. (WCAG 1.4.10)
- Text can be increased up to 200% without being truncated, overlapping other text, or being cut off. (WCAG 1.4.4)
- Text spacing can be increased without text overlapping, truncating or being cut off. See 1.4.12 Text Spacing for exact requirements. (WCAG 1.4.12)
## Code examples

#### Pass

The caption is correctly associated with the table in the accessibility tree, with the table being labelled by the caption element.

<table>
  <caption>
    Monthly Sales Report for Q1 2023
    <span class="visually-hidden">(This table shows sales figures for different product categories across January, February, and March.)</span>
  </caption>
  <thead>...</thead>
  <tbody>...</tbody>
</table>

The column headers are programmatically associated with the data cells they describe

<thead>
    <tr>
      <th scope="col">Product Category</th>
      <th scope="col">January Sales ($)</th>
      <th scope="col">February Sales ($)</th>
      <th scope="col">March Sales ($)</th>
    </tr>
  </thead>

For tables with irregular headers, the header cells are programmatically associated with the data cells they describe.

<table>
  <caption>
    Student Exam Results - Semester 1
  </caption>
  <thead>
    <tr>
      <th id="student-name" rowspan="2">Student Name</th>
      <th id="math-section" colspan="2">Mathematics</th>
      <th id="science-section" colspan="2">Science</th>
    </tr>
    <tr>
      <th id="math-midterm" headers="math-section">Midterm (Score)</th>
      <th id="math-final" headers="math-section">Final (Score)</th>
      <th id="science-midterm" headers="science-section">Midterm (Score)</th>
      <th id="science-final" headers="science-section">Final (Score)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="alice-smith" scope="row">Alice Smith</th>
      <td headers="alice-smith math-section math-midterm">85</td>
      <td headers="alice-smith math-section math-final">92</td>
      <td headers="alice-smith science-section science-midterm">78</td>
      <td headers="alice-smith science-section science-final">88</td>
    </tr>
    <tr>
      <th id="bob-johnson" scope="row">Bob Johnson</th>
      <td headers="bob-johnson math-section math-midterm">70</td>
      <td headers="bob-johnson math-section math-final">75</td>
      <td headers="bob-johnson science-section science-midterm">82</td>
      <td headers="bob-johnson science-section science-final">90</td>
    </tr>
  </tbody>
</table>
