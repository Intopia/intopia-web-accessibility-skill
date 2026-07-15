---
title: "Topic: Live Regions and Status"
metadata:
  author: Intopia
  version: "1.0"
---
# Live Regions and Status

Load this topic when content updates dynamically after page load without an explicit user navigation (search result counts, filter feedback, toasts, status messages) or when building a progress bar.

## Live Regions

Use `aria-live` only when all three conditions are true:

1. Content changes dynamically after page load.
2. The change does not result from explicit user navigation.
3. Focus management is not already handling the announcement.

- `role="status"` (`aria-live="polite"`): non-urgent updates such as search result counts and filter feedback.
- `role="alert"` (`aria-live="assertive"`): critical, time-sensitive errors only.
- Set `aria-atomic="true"` only when the whole region should be read as a unit.

## Progress Bars

A static progress bar does not need ARIA roles — its information is best conveyed as text (e.g. "Step 2 of 4" or "60% complete"). If that text is not part of the visual design, include it visually hidden so screen reader users still get it.
```
<div class="progress-track"><div class="progress-fill" style="width: 60%"></div></div>
<span class="visually-hidden">60% complete</span>
```
If the progress bar updates dynamically, use the progressbar role with value attributes so assistive technology announces changes:
```
<div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress"></div>
```
