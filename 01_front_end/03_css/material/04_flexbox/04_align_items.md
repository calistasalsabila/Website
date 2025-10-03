# CSS Align Items

The `align-items` property in CSS defines how flex items are aligned along the **cross axis** of the flex container. The cross axis is perpendicular to the main axis, which is defined by `flex-direction`.

---

## 1. Possible Values

### `stretch` (default)

* Flex items are stretched to fill the container along the cross axis.
* If a specific height/width is set on the items, they will not stretch.

```css
.container {
  display: flex;
  align-items: stretch;
}
```

### `flex-start`

* Flex items are aligned at the **start** of the cross axis.

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

### `flex-end`

* Flex items are aligned at the **end** of the cross axis.

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

### `center`

* Flex items are aligned at the **center** of the cross axis.

```css
.container {
  display: flex;
  align-items: center;
}
```

### `baseline`

* Flex items are aligned so their text baselines line up.

```css
.container {
  display: flex;
  align-items: baseline;
}
```

---

## 2. Main Axis vs Cross Axis

* If `flex-direction: row`, the cross axis is vertical.
* If `flex-direction: column`, the cross axis is horizontal.

---

## 3. Practical Notes

* Use `align-items` for **single-line** flex containers.
* For multi-line flex containers (when using `flex-wrap`), use `align-content` to control the spacing of multiple lines.
* To override alignment for a specific item, use `align-self`.

---

## Further Reading

* [MDN Web Docs: align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

> 📚 This is part of the CSS chapter.
