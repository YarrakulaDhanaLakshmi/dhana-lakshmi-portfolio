# Dhana Lakshmi — Developer Portfolio

A responsive, modern-dark React portfolio built with Vite and Lucide icons.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
1. Extract the ZIP and open the project folder in a terminal.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Personalize before publishing
Update `src/App.jsx`:
- Replace generic LinkedIn URLs with your actual LinkedIn profile.
- Add exact repository links for Inventory Management System and ECG classification, if you want to link directly to them.
- Verify the experience, education, technology list and project descriptions against your actual records and repositories.
- Add a resume file and a download link only after placing your current resume in the project and checking that it is safe to publish.

The portfolio intentionally avoids claiming that ML experiments are clinically validated. The ECG accuracy note describes reported notebook results, not medical performance.

## Deploy with GitHub Pages
For a simple Vite deployment, you can use Vercel or Netlify by importing the GitHub repository and setting:
- Build command: `npm run build`
- Output directory: `dist`

For GitHub Pages, configure Vite's `base` in `vite.config.js` to `'/REPOSITORY_NAME/'` for a project site (or `'/'` for a user site), then use a GitHub Actions workflow to build and publish `dist`. A deployment workflow is not included in this starter so you can choose the host you use.
