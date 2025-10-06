# Bootstrap 5 CSS — Comprehensive Guide

> A comprehensive, detailed reference to Bootstrap 5 CSS concepts, installation methods, layout systems, components, utilities, customization, and practical examples. This document focuses on understanding the purpose and syntax of common features and provides input-output examples (HTML input and expected visual/behavioral output notes).

---

## Table of contents

1. Introduction
2. Installation and setup

   * CDN
   * NPM / Yarn
   * Source (Sass)
3. Basic project structure
4. Grid system

   * Containers
   * Rows and columns
   * Breakpoints and responsive behavior
   * Column ordering and offsets
5. Layout utilities

   * Display
   * Flexbox
   * Spacing (margin & padding)
   * Sizing
   * Position
6. Typography

   * Headings, paragraphs, lead
   * Text utilities
   * Responsive typography
7. Colors and background

   * Color palette
   * Background utilities
   * Text color utilities
8. Buttons

   * Button classes and variants
   * Sizes, active/disabled states
   * Outline buttons
9. Forms

   * Form controls and layout
   * Validation states
   * Custom forms and switches
10. Components overview (cards, navs, dropdowns, modals, alerts)
11. Utilities API and customizing utilities
12. Theming and Sass customization

* Variables and maps
* Compiling Sass
* Creating a custom theme

13. Responsive design and helpers
14. Accessibility best practices
15. Migration notes (from Bootstrap 4)
16. Practical examples

* Responsive navbar
* Card grid layout
* Simple form with validation

17. Further reading & references

---

## 1. Introduction

Bootstrap 5 is a popular open-source CSS framework that provides a set of prebuilt styles, components, and utilities to create responsive web interfaces quickly. It is designed to be mobile-first and uses modern CSS features (including CSS custom properties and improved Flexbox utilities). Bootstrap 5 removes jQuery dependency (companion JavaScript now uses vanilla JS) and improves the utility API for customization.

**Purpose:** accelerate UI development by offering consistent, tested, and responsive building blocks.

**When to use:** prototypes, dashboards, admin panels, marketing pages, and projects that benefit from consistent visual language and rapid development.

## 2. Installation and setup

### CDN (quick start)

**Syntax / input:** include in the HTML `<head>` the CSS link and at the end of `<body>` the JS bundle (if needed).

```html
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.x/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS (optional for components) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.x/dist/js/bootstrap.bundle.min.js"></script>
```

**Output / behavior:** All Bootstrap styles are available immediately. JavaScript-based components (dropdowns, modals, tooltips) will work when the JS bundle is loaded.

### NPM / Yarn (project setup)

**Install commands:**

```bash
npm install bootstrap
# or
yarn add bootstrap
```

**Usage:** import the compiled CSS or the Sass source in your build pipeline.

```js
// import compiled CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// import JS bundle
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

**Output:** integrates with modern build tools (Webpack, Vite, Parcel). Good for production and tree-shaking when paired with customized Sass.

### Source (Sass)

**Why use Sass source:** full control over variables, maps, and functions. Allows creating a custom Bootstrap build that includes only required features.

**Common workflow:**

1. Install Bootstrap via npm.
2. Create a custom `scss` file that imports Bootstrap utilities and overrides variables before importing `bootstrap`.

```scss
// custom.scss
$theme-colors: (
  "primary": #0d6efd,
  "secondary": #6c757d
);

@import "node_modules/bootstrap/scss/bootstrap";
```

**Output:** compiled CSS with your variables applied.

## 3. Basic project structure

A simple HTML layout using Bootstrap:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/path/to/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap 5 Example</title>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">...
  </nav>

  <main class="container mt-4">
    <h1 class="display-5">Hello, Bootstrap 5</h1>
    <p class="lead">A short descriptive paragraph.</p>
  </main>

  <script src="/path/to/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Output:** responsive page with top navigation and spaced content.

## 4. Grid system

Bootstrap uses a 12-column grid powered by Flexbox. The grid is responsive and uses containers, rows, and columns.

### Containers

* `.container` — responsive fixed-width container that changes width at breakpoints.
* `.container-fluid` — full width, always 100%.
* `.container-{breakpoint}` (e.g., `.container-md`) — fixed-width until given breakpoint.

**Example:**

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
```

**Output:** two equal-width columns on a single row. Columns wrap on small screens.

### Rows and columns

* Use `.row` to create a horizontal group of columns.
* Columns are defined with `.col` (auto) or `.col-{size}-{number}` (explicit width), where `{size}` is one of `sm|md|lg|xl|xxl` and `{number}` is `1..12`.

**Explicit columns example:**

```html
<div class="row">
  <div class="col-md-8">Main</div>
  <div class="col-md-4">Sidebar</div>
</div>
```

**Output:** on medium+ screens, main occupies 8/12 and sidebar 4/12. On smaller screens, columns stack.

### Breakpoints and responsive behavior

Bootstrap 5 breakpoints (min-width):

* `sm`: 576px
* `md`: 768px
* `lg`: 992px
* `xl`: 1200px
* `xxl`: 1400px

Class prefixes like `.col-sm-6` apply at the specified breakpoint and up.

### Column ordering and offsets

* Ordering: `.order-{breakpoint}-{value}` where value can be `0` (first) to `12` or `last`.
* Offsets: `.offset-{breakpoint}-{number}` to leave blank columns to the left.

```html
<div class="col-md-6 order-md-2">Second on md+</div>
<div class="col-md-6 order-md-1">First on md+</div>
```

**Output:** reversed order on medium+ screens.

## 5. Layout utilities

Bootstrap offers many utility classes that target single responsibilities. They are intentionally small and composable.

### Display utilities

* `.d-none`, `.d-block`, `.d-flex`, `.d-inline`, `.d-inline-block`.
* Responsive: `.d-md-none` hides on md and up, `.d-sm-block` shows from sm and up.

**Example:**

```html
<div class="d-none d-md-block">Visible from md up</div>
```

### Flexbox

* `.d-flex` to create a flex container.
* `.flex-row`, `.flex-column`, `.flex-wrap`, `.justify-content-{start|center|end|between|around|evenly}` and `.align-items-{start|center|end|stretch}`.

```html
<div class="d-flex justify-content-between align-items-center">
  <div>A</div>
  <div>B</div>
</div>
```

**Output:** A and B on a single line with space between.

### Spacing (margin & padding)

Syntax: `{property}{sides}-{breakpoint?}-{size}`

* `property`: `m` = margin, `p` = padding
* `sides`: `t`, `b`, `s` (start), `e` (end), `x` (left & right), `y` (top & bottom), blank (all)
* `size`: `0` (0), `1` (0.25rem), `2` (0.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem), `auto`

**Example:** `.mt-3` (margin-top: 1rem), `.px-2` (padding-left/right: 0.5rem)

### Sizing

* Width utilities: `.w-25`, `.w-50`, `.w-75`, `.w-100`, `.w-auto`.
* Height utilities: `.h-25`, `.h-50`, `.h-75`, `.h-100`, `.h-auto`.

### Position

* `.position-relative`, `.position-absolute`, `.position-fixed`, `.position-sticky`.
* Offsets: `.top-0`, `.start-50`, etc.

## 6. Typography

Bootstrap provides basic typographic styles and utility classes.

* Headings: `.h1` to `.h6` and `.display-1` to `.display-6` for larger headings.
* `.lead` for leading paragraph.
* Utility classes: `.text-muted`, `.text-uppercase`, `.text-truncate`.

**Example:**

```html
<h1 class="display-5">Big heading</h1>
<p class="lead">This paragraph stands out.</p>
```

**Output:** visually distinct heading and lead paragraph.

## 7. Colors and background

Bootstrap ships a palette in `$theme-colors` including `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

* Text color: `.text-primary`, `.text-muted`, `.text-white`.
* Background color: `.bg-primary`, `.bg-light`, `.bg-transparent`.

**Example:**

```html
<div class="p-3 mb-2 bg-primary text-white">Primary block</div>
```

## 8. Buttons

Button base class: `.btn` plus variant classes like `.btn-primary`, `.btn-outline-secondary`.

**Sizes:** `.btn-sm`, `.btn-lg`.

**States:** disabled by adding `disabled` attribute or `.disabled` class when using anchors.

**Example:**

```html
<button class="btn btn-primary btn-lg">Primary action</button>
<a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>
```

**Output:** styled buttons with appropriate sizes and disabled styles.

## 9. Forms

Bootstrap 5 improves form controls with consistent styling. Use `.form-control` for inputs, `.form-select` for selects.

**Floating labels:**

```html
<div class="form-floating">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
```

**Validation:** Add `.is-valid` or `.is-invalid` to show validation states and use `.invalid-feedback` / `.valid-feedback` with messages.

**Example:**

```html
<input type="text" class="form-control is-invalid" id="name">
<div class="invalid-feedback">Please provide a valid name.</div>
```

**Output:** input with red border and feedback message.

## 10. Components overview

Bootstrap provides many prebuilt components. A few highlights:

* **Card:** flexible content container with header, body, footer.
* **Navs & Tabs:** `.nav`, `.nav-tabs`, `.nav-pills` for navigation.
* **Dropdowns:** attach to `.dropdown` and `.dropdown-menu` with data attributes or JS.
* **Modal:** `.modal` structure with `.modal-dialog` and `.modal-content` — requires JS to toggle.
* **Alerts:** `.alert`, variants like `.alert-success` and dismissible alerts using `.alert-dismissible` and `.btn-close`.

Each component has clearly defined HTML structure and optional attributes for behavior.

## 11. Utilities API and customizing utilities

Bootstrap 5 provides a Utilities API inside its Sass code. You can enable/disable utility groups or customize generated classes. This reduces CSS size and allows project-specific utilities.

**Typical workflow:** Override utility settings in your Sass `custom.scss` before importing Bootstrap source.

## 12. Theming and Sass customization

Bootstrap variables are defined as Sass variables and maps. Common tasks:

* Change primary color
* Adjust border-radius
* Enable RTL support

**Example (override variables):**

```scss
// _custom-variables.scss
$primary: #1f7a8c;
$body-bg: #f8f9fa;

@import "node_modules/bootstrap/scss/bootstrap";
```

**Output:** compiled CSS uses `$primary` and `$body-bg` values throughout components and utilities.

## 13. Responsive design and helpers

* Use responsive utility variants like `.d-sm-none`, `.text-md-start`, `.mx-lg-4`.
* Use grid breakpoints to change column sizes at specific screen widths.

**Example:**

```html
<div class="col-12 col-md-6">Responsive column</div>
```

**Output:** full width on small screens, half width on md and up.

## 14. Accessibility best practices

* Use semantic HTML (`<nav>`, `<header>`, `<main>`).
* For interactive components, include ARIA attributes when appropriate (modals, alerts, dropdowns provide guidance in docs).
* Ensure adequate color contrast for text and backgrounds.
* For keyboard navigation, confirm that focus states are visible and JS components support keyboard controls.

## 15. Migration notes (from Bootstrap 4)

Major changes in Bootstrap 5:

* Dropped jQuery dependency.
* Introduced `g-` classes for gutters (`g-0`...`g-5`).
* Changed `.form-group` patterns and improved form controls.
* New utilities and improved Sass API.

When migrating, test components and JavaScript behavior, and update custom code that relied on jQuery plugins.

## 16. Practical examples

### Example 1 — Responsive navbar (input)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>
```

**Output / behavior:** collapsed toggle on small screens; full menu on large screens; toggler animates using the bundled JS.

### Example 2 — Card grid layout (input)

```html
<div class="container">
  <div class="row g-4">
    <div class="col-sm-6 col-lg-4">
      <div class="card">
        <img src="/img.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">A quick example.</p>
          <a href="#" class="btn btn-primary">Go</a>
        </div>
      </div>
    </div>
    <!-- repeat columns -->
  </div>
</div>
```

**Output:** responsive grid of cards with consistent spacing (gutters provided by `g-4`).

### Example 3 — Simple form with validation (input)

```html
<form class="row g-3 needs-validation" novalidate>
  <div class="col-md-6">
    <label for="firstname" class="form-label">First name</label>
    <input type="text" class="form-control" id="firstname" required>
    <div class="invalid-feedback">Please provide a first name.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

**Output:** browser prevents submitting invalid form when `novalidate` is omitted or when custom JS checks validity; `.invalid-feedback` shows when control is invalid after validation checks.

## 17. Further reading & references

* Official Bootstrap 5 documentation (components, utilities, migration guides)
* Sass customization guide in Bootstrap docs
* Accessibility recommendations in the Bootstrap docs

---

### Notes

* This guide focuses on core CSS patterns and common usage. For JavaScript behaviors (modals, tooltips, etc.) consult the official Bootstrap docs for API details and examples.
* When building production sites, prefer compiling customized Sass to reduce CSS size and avoid unused utilities.
[link bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

---

> 📚 This is part of the CSS chapter.


