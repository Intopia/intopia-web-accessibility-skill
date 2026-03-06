---
title: "Code example: Table"
metadata:
  author: Intopia
  version: "1.0"
---
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

* * *

The column headers are programmatically associated with the data cells they describe

<thead>
    <tr>
      <th scope="col">Product Category</th>
      <th scope="col">January Sales ($)</th>
      <th scope="col">February Sales ($)</th>
      <th scope="col">March Sales ($)</th>
    </tr>
  </thead>

* * *

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

