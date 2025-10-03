# Difference Between Block and Inline Elements

In HTML and CSS, elements are mainly classified as **block-level** or **inline**. Knowing their differences is important for layout and styling.

---

## Block-Level Elements

### Key Features

* Always start on a **new line**.
* By default, they take up the **entire width** of their parent container.
* Can contain **inline** elements and sometimes other block-level elements.
* Support **width**, **height**, **margin**, and **padding** in both vertical and horizontal directions.

### Common Examples

* `<div>`
* `<p>`
* `<h1>`–`<h6>`
* `<section>`, `<article>`
* `<ul>`, `<li>`

### Visual

```
[Block element]
--------------------------------------
|    Content stretches full width     |
--------------------------------------
```

---

## Inline Elements

### Key Features

* Flow **inline with text** (do not start on a new line).
* Take up only as much **width as their content** needs.
* Can contain only **text or other inline elements**.
* Respect horizontal **margin** and **padding**, but vertical margin/height is limited.

### Common Examples

* `<span>`
* `<a>`
* `<strong>` / `<em>`
* `<img>`

### Visual

```
This is text [inline element] continuing text.
```

---

## Quick Comparison

| Feature              | Block-Level              | Inline                  |
| -------------------- | ------------------------ | ----------------------- |
| Starts on new line   | Yes                      | No                      |
| Default width        | 100% of parent container | Content only            |
| Can contain          | Block + Inline           | Inline only + text      |
| Width/height control | Yes                      | Limited                 |
| Examples             | `<div>`, `<p>`, `<h1>`   | `<span>`, `<a>`, `<em>` |

---

## Notes

* CSS `display` property can change behavior (e.g., `display: inline-block`).
* Inline-block combines properties of both: flows inline but allows width/height control.

> 📚 This is part of the CSS chapter.
