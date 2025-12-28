# Tailwind CSS: Custom Font Variables and Naming

This document explains **how Tailwind CSS font-family utilities are generated from theme variables**, how to **use custom variable names**, and how those variables are **called automatically as utility classes** in HTML.

This approach follows the **Tailwind v4 theme-based system** using CSS variables and the `@theme` directive.

---

## 1. Core Concept

In Tailwind CSS v4, font-family utilities are created using **CSS variables** defined in the theme.

The workflow is:

1. Define a font variable using `--font-*`
2. Tailwind generates a matching utility class
3. Use the utility class directly in HTML

You do **not** manually write `font-family` utilities.

---

## 2. Basic Font Variable Definition

Example `input.css`:

```css
@import "tailwindcss";

@theme {
  --font-body: "Inter", system-ui, sans-serif;
  --font-display: "Oswald", sans-serif;
}
```

From this definition, Tailwind automatically generates:

```css
.font-body {
  font-family: var(--font-body);
}

.font-display {
  font-family: var(--font-display);
}
```

---

## 3. Custom Naming (Any Name Is Allowed)

The variable name after `--font-` is **completely free**. You are not required to use names like `body` or `display`.

### Example: Custom Semantic Naming

```css
@theme {
  --font-hitam: "Inter", system-ui, sans-serif;
  --font-judul: "Oswald", sans-serif;
}
```

Generated utilities:

```css
.font-hitam {
  font-family: var(--font-hitam);
}

.font-judul {
  font-family: var(--font-judul);
}
```

Usage in HTML:

```html
<body class="font-hitam">
  <h1 class="font-judul text-4xl font-bold">
    Judul Halaman
  </h1>

  <p>
    Ini body text menggunakan font-hitam.
  </p>
</body>
```

---

## 4. Global Body Font Strategy

A common pattern is to assign a font utility to the `<body>` element so all text inherits it by default.

```html
<body class="font-hitam">
```

This allows:

* Consistent typography
* Easy override per section or component
* Clean HTML

---

## 5. Responsive Font Switching

Font utilities can be combined with responsive prefixes:

```html
<h1 class="font-hitam md:font-judul">
  Responsive Font Example
</h1>
```

Meaning:

* Mobile → `font-hitam`
* Medium screens and up → `font-judul`

---

## 6. Font Feature Settings

Tailwind allows attaching default `font-feature-settings` to a font variable.

```css
@theme {
  --font-judul: "Oswald", sans-serif;
  --font-judul--font-feature-settings: "cv02", "cv03", "cv04";
}
```

Tailwind compiles this into:

```css
.font-judul {
  font-family: var(--font-judul);
  font-feature-settings: var(--font-judul--font-feature-settings);
}
```

---

## 7. Font Variation Settings (Variable Fonts)

For variable fonts, you can also define variation settings:

```css
@theme {
  --font-judul: "Oswald", sans-serif;
  --font-judul--font-variation-settings: "opsz" 32;
}
```

This is useful for:

* Optical size control
* Advanced typographic tuning

---

## 8. Loading Custom Fonts with @font-face

Custom fonts must be loaded using standard CSS before being referenced in theme variables.

```css
@font-face {
  font-family: Oswald;
  font-style: normal;
  font-weight: 200 700;
  font-display: swap;
  src: url("/fonts/Oswald.woff2") format("woff2");
}

@theme {
  --font-judul: "Oswald", sans-serif;
}
```

---

## 9. Using Google Fonts

When using Google Fonts, place the `@import` at the very top of the CSS file:

```css
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap");
@import "tailwindcss";

@theme {
  --font-judul: "Oswald", sans-serif;
}
```

---

## 10. Naming Conventions (Recommended)

Choose names that describe **purpose**, not appearance:

```css
--font-primary
--font-secondary
--font-heading
--font-body
--font-code
```

Custom personal style naming is also valid:

```css
--font-hitam
--font-tipis
--font-tebal
```

As long as the name starts with `--font-`, Tailwind will generate a utility.

---

## 11. Common Mistakes

* Forgetting `@import "tailwindcss";`
* Expecting utilities from variables not prefixed with `--font-`
* Manually writing `.font-*` utilities
* Using spaces in variable names

---

## 12. Mental Model

Think of it as:

* `--font-hitam` → variable
* `.font-hitam` → auto-generated utility
* `class="font-hitam"` → function call

Tailwind acts as the compiler connecting them.

---

## Further Reading

* [https://tailwindcss.com/docs/font-family](https://tailwindcss.com/docs/font-family)
* [https://tailwindcss.com/docs/theme](https://tailwindcss.com/docs/theme)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings)

> 📚 This is part of the Tailwinds chapter.
