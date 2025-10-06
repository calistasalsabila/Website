# CSS `align-content` and `align-self`

## Introduction

In CSS Flexbox and Grid, alignment properties allow developers to control how items are positioned inside a container along the **cross-axis** (the perpendicular axis to the main axis). Two properties that often confuse beginners are:

* **`align-content`**: Controls how **multiple lines** (rows or columns) are spaced inside a container when extra space is available.
* **`align-self`**: Controls how an **individual item** is aligned inside its container along the cross-axis, potentially overriding the container’s `align-items` property.

Even though they sound similar, their scope is very different: one affects **groups of items (lines)**, while the other affects **a single item**.

---

## `align-content`

The `align-content` property only has an effect when the container has **multiple lines** of content (e.g., flex-wrap or grid rows). It does not affect single-line layouts.

### Syntax

```css
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
```

### Values

* **`flex-start`**: All lines are packed toward the start of the cross-axis.
* **`flex-end`**: All lines are packed toward the end of the cross-axis.
* **`center`**: All lines are packed toward the center of the cross-axis.
* **`space-between`**: Lines are evenly distributed; the first line is at the start and the last line is at the end.
* **`space-around`**: Lines are evenly distributed with equal space around them.
* **`space-evenly`**: Lines are evenly distributed with equal spacing between every line and also at the edges.
* **`stretch`** (default): Lines are stretched to take up the remaining space in the container.

### Example

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 400px;
}
```

In this case, if the items wrap into multiple rows, the rows will be spaced evenly between the top and bottom of the container.

---

## `align-self`

The `align-self` property applies to an **individual item** inside a flex or grid container. It overrides the container’s `align-items` property for that specific item.

### Syntax

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

### Values

* **`auto`** (default): Inherits the alignment value from the container (`align-items`).
* **`flex-start`**: Aligns the item to the start of the cross-axis.
* **`flex-end`**: Aligns the item to the end of the cross-axis.
* **`center`**: Aligns the item in the center of the cross-axis.
* **`baseline`**: Aligns the item’s baseline with the baseline of others.
* **`stretch`**: Stretches the item to fill the available space.

### Example

```css
.container {
  display: flex;
  align-items: center; /* default alignment for all items */
}

.item.special {
  align-self: flex-end; /* overrides the container setting */
}
```

In this case, all items are aligned at the center of the cross-axis except the `.special` item, which is aligned at the end.

---

## Key Differences Between `align-content` and `align-self`

| Feature    | `align-content`                    | `align-self`                         |
| ---------- | ---------------------------------- | ------------------------------------ |
| Scope      | Applies to **container**           | Applies to **individual item**       |
| Affects    | Distribution of **multiple lines** | Positioning of **one item**          |
| Works with | Flexbox (when wrapped), CSS Grid   | Flexbox and CSS Grid                 |
| Overrides  | N/A                                | Overrides `align-items` for one item |

---

## Further Reading

* [MDN Web Docs - align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
* [MDN Web Docs - align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
* [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

> 📚 This is part of the CSS chapter.
