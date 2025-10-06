# CSS Flexbox: Basic Concepts and Usage

Flexbox, or the Flexible Box Layout, is a CSS module designed for one-dimensional layout (either as a row or a column). It helps distribute space among items and provides powerful alignment capabilities.

---

## 1. Core Concepts

### Axes: Main Axis & Cross Axis

* The **main axis** is defined by the `flex-direction` property (`row`, `row-reverse`, `column`, `column-reverse`).
* The **cross axis** runs perpendicular to the main axis.

### Flex Container & Flex Items

* To turn an element into a flex container, set `display: flex` or `display: inline-flex`. Its **direct children** become flex items.
* A flex container’s default settings:
  • `flex-direction: row`
  • `flex-wrap: nowrap`
  • `justify-content: flex-start`
  • `align-items: stretch`
  • Flex items default to `flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`

---

## 2. Wrapping & Flex Flow

* By default, flex items stay on a single line even if they overflow the container (`flex-wrap: nowrap`).
* To allow items to wrap to new lines, use `flex-wrap: wrap`. Each line behaves independently.
* The shorthand `flex-flow` combines `flex-direction` and `flex-wrap`.

Example:

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

---

## 3. Controlling Size of Flex Items

Three main properties on flex items determine how space is allocated:

| Property      | Purpose                                                             |
| ------------- | ------------------------------------------------------------------- |
| `flex-basis`  | Base size of the item before distributing extra space or shrinking. |
| `flex-grow`   | Determines how items grow to fill available space.                  |
| `flex-shrink` | Determines how items shrink when space is insufficient.             |

These can be combined into the shorthand `flex` property. There are also keyword values such as `flex: auto`, `flex: none`, and `flex: initial` for common patterns.

---

## 4. Alignment and Justification

Flexbox provides alignment along both axes.

### `justify-content` (Main axis)

Controls alignment along the main axis:

* `flex-start` (default)
* `flex-end`
* `center`
* `space-between`
* `space-around`
* `space-evenly`

### `align-items` (Cross axis)

Controls alignment of items on the cross axis:

* `stretch` (default)
* `flex-start`
* `flex-end`
* `center`
* `baseline`

### `align-self`

Overrides `align-items` for a specific flex item.

### `align-content`

Applies when there are multiple lines (wrapping) and controls distribution of space between those lines.

---

## Further Reading

* [MDN Web Docs: Basic Concepts of Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)


> 📚 This is part of the CSS chapter.
