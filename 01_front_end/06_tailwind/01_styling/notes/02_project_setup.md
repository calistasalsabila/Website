# Tailwind CSS Project Setup Guide

This document describes a basic setup workflow for a frontend project using **Tailwind CSS**, **Prettier**, and several development utilities.

---

## 1. Install Development Dependencies

Install the required development dependencies using npm:

```bash
npm install -D @egoist/tailwindcss-icons @iconify-json/material-symbols browser-sync concurrently prettier prettier-plugin-tailwindcss tailwindcss
```

### Dependency Overview

* **tailwindcss**: Utility-first CSS framework.
* **@egoist/tailwindcss-icons**: Tailwind plugin for using Iconify icons as utilities.
* **@iconify-json/material-symbols**: Icon set used with Iconify.
* **prettier**: Code formatter.
* **prettier-plugin-tailwindcss**: Automatically sorts Tailwind class names.
* **browser-sync**: Development server with live reload.
* **concurrently**: Run multiple npm scripts at the same time.

---

## 2. Set Up Tailwind CSS

Initialize Tailwind CSS configuration files:

```bash
npx tailwindcss init -p
```

This will generate:

* `tailwind.config.js`
* `postcss.config.js`

Then configure the `content` field in `tailwind.config.js` to match your project structure:

```js
content: [
  "./*.html",
  "./src/**/*.{html,js}"
]
```

---

## 3. Set Up Working Directory

A common project structure looks like this:

```text
project-root/
├─ src/
│  ├─ input.css
│  ├─ js/
│  └─ assets/
├─ dist/
│  └─ output.css
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
```

In `input.css`, add Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. Set Up Prettier

Create a Prettier configuration file `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

This ensures:

* Consistent code formatting
* Automatic sorting of Tailwind utility classes

---

## 5. Set Up NPM Scripts

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
    "serve": "browser-sync start --server --files 'dist/*.css, *.html'",
    "dev": "concurrently \"npm run build:css\" \"npm run serve\""
  }
}
```

### Script Explanation

* **build:css**: Compiles Tailwind CSS and watches for changes.
* **serve**: Starts a local development server with live reload.
* **dev**: Runs Tailwind build and BrowserSync simultaneously.

---

## 6. Development Workflow

Start the development environment:

```bash
npm run dev
```

This setup enables:

* Live-reloading development server
* Automatic CSS rebuild on file changes
* Consistent formatting with Prettier
