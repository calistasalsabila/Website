# Tailwind CSS CLI Setup

This document explains how to set up **Tailwind CSS using the official CLI** without any framework. This approach is suitable for simple static projects or learning Tailwind fundamentals.

---

## Prerequisites

Make sure you have the following installed:

* Node.js (LTS recommended)
* npm (comes with Node.js)

You can verify the installation using:

```bash
node -v
npm -v
```

---

## 1. Initialize npm Project

Create a new project directory, navigate into it, then initialize npm:

```bash
npm init -y
```

This will generate a `package.json` file with default configuration.

---

## 2. Install Tailwind CSS CLI

Install Tailwind CSS and its official CLI as development dependencies:

```bash
npm install tailwindcss @tailwindcss/cli
```

After installation, the `node_modules` folder and `package-lock.json` will be created.

---

## 3. Project Structure

Create a `src` folder to store your Tailwind source files:

```bash
mkdir src
```

Recommended structure:

```text
project-root/
├── src/
│   ├── input.css
│   └── output.css
├── index.html
├── package.json
└── node_modules/
```

---

## 4. Create Tailwind Input File

Inside the `src` folder, create a file named `input.css`:

```bash
touch src/input.css
```

Add the following content:

```css
@import "tailwindcss";
```

This line tells the Tailwind CLI to inject all Tailwind layers (base, components, utilities).

---

## 5. Link Tailwind Output in HTML

In your `index.html` file, link the generated CSS file:

```html
<link href="./src/output.css" rel="stylesheet">
```

Make sure the path matches the location of `output.css`.

---

## 6. Build Tailwind CSS (Watch Mode)

Run the Tailwind CLI command below:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

Explanation:

* `-i ./src/input.css` → input file containing Tailwind imports
* `-o ./src/output.css` → output CSS file
* `--watch` → rebuild automatically when files change

While this command is running, any change to your CSS or HTML will trigger a rebuild.

---

## 7. Usage

You can now start using Tailwind utility classes in your HTML:

```html
<h1 class="text-3xl font-bold text-blue-600">
  Hello Tailwind CLI
</h1>
```

Save the file and Tailwind will automatically regenerate `output.css`.

---

## Notes

* This setup does not use `tailwind.config.js` by default
* Suitable for learning, small projects, or static sites
* For production projects, consider adding a config file and content scanning

---

## Further Reading

* [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
* [Tailwind CSS CLI Documentation](https://tailwindcss.com/docs/installation/tailwind-cli)
* [Utility-First CSS Explained](https://tailwindcss.com/docs/utility-first)
* [Tailwind CSS Configuration Reference](https://tailwindcss.com/docs/configuration)
* [Optimizing for Production](https://tailwindcss.com/docs/optimizing-for-production)

> 📚 This is part of the Tailwinds chapter.
