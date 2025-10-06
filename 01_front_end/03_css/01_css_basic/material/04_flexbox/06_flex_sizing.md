# CSS Flex Sizing

## Introduction

Flex sizing in CSS refers to how flex items grow, shrink, and take up space inside a flex container. The Flexbox module provides flexible sizing options that allow elements to adapt dynamically based on available space. The main properties that control flex sizing are:

* **`flex-grow`**: Defines how much a flex item can grow relative to others.
* **`flex-shrink`**: Defines how much a flex item can shrink relative to others.
* **`flex-basis`**: Defines the initial size of a flex item before free space is distributed.
* **`flex` shorthand**: A shorthand property combining `flex-grow`, `flex-shrink`, and `flex-basis`.

---

## `flex-grow`

The `flex-grow` property controls how much a flex item can grow relative to the other items when extra space is available in the container.

### Syntax

```css
flex-grow: <number>;
```

* Default: `0` (items will not grow)
* A positive integer defines the proportion relative to other items.

### Example

```css
.item1 {
  flex-grow: 1; /* grows to take available space */
}
.item2 {
  flex-grow: 2; /* grows twice as much as item1 */
}
```

If there is free space, `.item2` will take twice as much space as `.item1`.

---

## `flex-shrink`

The `flex-shrink` property determines how items shrink when the container is too small.

### Syntax

```css
flex-shrink: <number>;
```

* Default: `1` (items shrink if needed)
* `0` means the item will not shrink.

### Example

```css
.item1 {
  flex-shrink: 1;
}
.item2 {
  flex-shrink: 0; /* will not shrink */
}
```

If the container width decreases, `.item1` will shrink but `.item2` will keep its size.

---

## `flex-basis`

The `flex-basis` property sets the initial size of a flex item before extra space is distributed. It can be a length (px, em, %) or the keyword `auto`.

### Syntax

```css
flex-basis: auto | <length> | <percentage>;
```

* Default: `auto` (size based on content or width property)
* Defines the starting point for distributing space.

### Example

```css
.item1 {
  flex-basis: 200px; /* starts at 200px */
}
.item2 {
  flex-basis: 100px; /* starts at 100px */
}
```

---

## `flex` Shorthand

The `flex` shorthand combines `flex-grow`, `flex-shrink`, and `flex-basis`.

### Syntax

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
```

### Example

```css
.item1 {
  flex: 1 1 200px; /* grow:1, shrink:1, basis:200px */
}
.item2 {
  flex: 2 0 100px; /* grow:2, shrink:0, basis:100px */
}
```

Common patterns:

* `flex: 1;` → `flex: 1 1 0%`
* `flex: auto;` → `flex: 1 1 auto`
* `flex: none;` → `flex: 0 0 auto`

---

## Key Points

* **`flex-grow`** controls how items expand.
* **`flex-shrink`** controls how items contract.
* **`flex-basis`** defines the initial size.
* **`flex` shorthand** makes it easier to define all three.

---

## Further Reading

* [MDN Web Docs - flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
* [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [W3C CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)


> 📚 This is part of the CSS chapter.
