# Readability Tester

A simple web app to help you find the font, spacing, and layout that makes reading easiest for you.

**Live app:** https://rinne79.github.io/readabilitytest

> To activate the link above: go to **Settings → Pages** in this repo, set Source to _Deploy from branch_, choose `main` / `/ (root)`, and save.

## What it does

- **Font picker** — switch between 12 fonts, including accessibility-focused ones like Atkinson Hyperlegible and Lexend
- **Live sliders** — adjust font size, line height, letter spacing, word spacing, and column width in real time
- **Themes** — Light, Sepia, Dark, and High-contrast
- **Example texts** — Fiction, News, Science, and Poetry to test with
- **"My text" tab** — paste your own text and read it with your chosen settings
- **Side-by-side comparison** — paste any text at the bottom and see it in the default style on the left vs. your settings on the right

## Fonts included

| Font | Notes |
|---|---|
| Atkinson Hyperlegible | Designed by the Braille Institute for low-vision readers |
| Lexend | Designed to reduce visual stress and improve reading fluency |
| Comic Neue | Often recommended for dyslexic readers |
| Open Sans, Roboto, Raleway, Verdana | Clean sans-serifs |
| Merriweather, EB Garamond, Source Serif 4, Georgia | Serif options |
| Arial | System fallback |

## Running locally

No build step needed — just open `index.html` in a browser, or serve with any static file server:

```bash
npx serve .
```
