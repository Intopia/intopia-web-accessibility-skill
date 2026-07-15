---
title: "Topic: Images and Charts"
metadata:
  author: Intopia
  version: "1.0"
---
# Images and Charts

Load this topic for any image, icon, figure, chart, graph, or data visualisation: alternative text decisions and accessible equivalents for complex visuals.

## Alternative Text

| Image type                         | Requirement                                                  |
| :--------------------------------- | :----------------------------------------------------------- |
| Decorative                         | `alt=""` (empty string; do not omit the attribute)           |
| Informative                        | Describe the information conveyed, not the image literally   |
| Functional (inside link or button) | Describe the action or destination                           |
| Complex (chart, diagram)           | Use `aria-describedby` pointing to a nearby detailed text description |

## Charts and Data Visualisations

A chart is a complex image; the visual alone is never sufficient.

Unless an interactive chart is explicitly requested, mark the chart (`<svg>`/`<canvas>`/wrapper) `aria-hidden="true"` and provide the data as the accessible equivalent: a marked-up `<table>` (see Tables) for exact values, or a text summary stating the takeaway (e.g. "Revenue rose steadily from Q1 to Q4, peaking at $1.2M") when the trend matters more. Place it adjacent to the chart or in a `<details>` disclosure directly after. The table or summary must be readable on its own, not gated behind hover or mouse-only controls. Give the chart a visible heading or `<figcaption>` for sighted context; the accessible name lives on the table `<caption>` or summary.

The chart must still work visually: distinguish series without relying on colour alone (1.4.1) using labels, patterns, or markers; meet 3:1 for meaningful data elements (1.4.11) and text contrast (4.5:1, or 3:1 large) for labels, axes, and legends.

If an interactive chart is explicitly requested, the chart cannot be `aria-hidden`: each focusable point needs a visible focus indicator and an accessible name conveying its value, still provide the data table, and respect `prefers-reduced-motion`.
