---
title: "Code example: Complex Image (e.g. diagram, graph, infographic)"
metadata:
  author: Intopia
  version: "1.0"
---
The detailed text description is located on the same page close to the image or on another page but is easily discoverable from the image.

**Full description provided on the same page**

<!-- The complex image itself -->
<img src="quarterly-sales-chart.png" alt="Quarterly Sales Performance Chart. A full description is provided below - Detailed Sales Performance Analysis (Q1-Q4)" />

<!-- The detailed text description, located close to the image -->
<div id="sales-chart-description">
  <h3>Detailed Sales Performance Analysis (Q1-Q4)</h3>
  <p>This bar chart illustrates the company's sales performance across four quarters. Q1 sales were $1.2 million, Q2 saw a significant increase to $2.5 million, Q3 maintained strong performance at $2.3 million, and Q4 reached a peak of $3.1 million. The consistent growth from Q1 to Q4 indicates a positive trend in market demand and effective sales strategies. Each bar is clearly labeled with its corresponding quarter and sales value, and distinct patterns are used in addition to color to differentiate quarters.</p>
</div>

**Full description provided on a different page**

<!-- The complex image, acting as a link to its detailed description -->
<a href="detailed-sales-report.html">
  <img src="quarterly-sales-chart.png" alt="Quarterly Sales Performance Chart. Click for detailed report."
</a>

<!-- Optional: A separate link to the detailed description for redundancy or different phrasing -->
<p>For a full breakdown of our quarterly sales, please refer to the <a href="detailed-sales-report.html">Detailed Sales Report</a>.</p>

