# GABA 3D Menu MVP

A browser-based QR restaurant menu demo for GABA — Grab A Bite.

## Customer flow

QR → menu → dish → interactive 3D → AR handoff → add to order.

## Demo

The site is a static HTML/CSS/JS app and is suitable for GitHub Pages.

## Table QR

Use `?table=07` (or another table number) to open the menu for a specific table. The built-in QR generator creates the current page URL with the selected table number.

## Notes

- Dish photographs are loaded from the supplied Pexels image URLs.
- 3D models are loaded from public model URLs for the MVP.
- Native AR availability depends on the visitor's phone/browser.
- The camera overlay is a fallback demo, not a full world-tracked AR engine.
