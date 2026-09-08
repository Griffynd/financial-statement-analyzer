# Financial Statement Analyzer

A single-page web app that turns a company's financial statements (Excel/CSV) into an interactive dashboard — automatically computing liquidity, leverage, profitability, and efficiency ratios.

**[Live Demo →](#)** *(add your GitHub Pages link here once deployed)*

![screenshot](./screenshot.png)
*(add a screenshot of the dashboard here)*

## Features

- **Drag-and-drop upload** of Balance Sheet, Income Statement, and Cash Flow data as `.xlsx` or `.csv`
- **Smart line-item recognition** — matches common Vietnamese/English line item names (with or without diacritics) to the right financial concept, so it works with real-world exports that aren't perfectly formatted
- **Auto-calculated ratios**: current ratio, quick ratio, debt-to-equity, debt-to-assets, gross/net margin, ROA, ROE, asset turnover, inventory turnover, DIO, DSO, DPO
- **Interactive charts** for revenue & profit trends, asset/equity structure, and cash flow by activity, built with Chart.js
- **Multi-company comparison** — load several statements side by side and compare revenue, margins, ROE/ROA, and leverage on one screen
- **Upload history** — every file you analyze is saved in the browser (via a small key-value store) so you can reopen or re-compare it later without re-uploading
- **PDF export** — one click renders a clean, print-friendly version of the report (uses the browser's native "Save as PDF")
- **Downloadable template** so users know exactly what structure to upload
- 100% client-side — no backend, no data leaves the browser

## Tech stack

- Vanilla HTML/CSS/JavaScript (no framework, no build step)
- [Chart.js](https://www.chartjs.org/) for visualizations
- [SheetJS (xlsx)](https://sheetjs.com/) for Excel parsing
- [PapaParse](https://www.papaparse.com/) for CSV parsing

## Running locally

This is a static site — no install, no build:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
open index.html   # or just double-click the file
```

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save — your app will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Input format

The first column is the line item name; each subsequent column is a reporting period (year/quarter). See `template.xlsx` (downloadable from the app itself) for a working example.

| Chỉ tiêu | 2023 | 2024 |
|---|---|---|
| Doanh thu thuần | 3,200,000,000 | 3,700,000,000 |
| Lợi nhuận sau thuế | 380,000,000 | 460,000,000 |
| ... | | |

## License

MIT — see [LICENSE](./LICENSE).
