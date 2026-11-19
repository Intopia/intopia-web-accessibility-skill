---
title: "Topic: Images and Charts"
metadata:
  author: Intopia
  version: "1.1"
---
# Images and Charts

| Image type | Requirement |
|---|---|
| Decorative | `alt=""` (don't omit it) |
| Informative | Describe the information, not the picture |
| Functional (in a link or button) | Describe the action or destination |
| Complex (chart, diagram) | `aria-describedby` pointing to a nearby detailed text description |

## Charts
- Unless an interactive chart is asked for, mark the chart `aria-hidden="true"` and put the data next to it (or in a `<details>` right after) as a `<table>` with headers, or a text summary of the takeaway. It must be readable without hover.
- Give the chart a visible heading or `<figcaption>`; the accessible name lives on the table `<caption>` or summary.
- Don't rely on colour alone to tell series apart (labels, patterns, markers). Data marks need 3:1; labels, axes and legend text need 4.5:1 (3:1 large).
- Interactive charts: each focusable point has visible focus and a name with its value; still provide the table; respect `prefers-reduced-motion`.
