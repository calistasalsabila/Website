# CSS Justify Content

The `justify-content` property in CSS defines how flex items are aligned along the **main axis** of the flex container. The main axis depends on the `flex-direction` setting.

---

## 1. Possible Values

### `flex-start` (default)

* Items are packed toward the **start** of the main axis.

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```

### `flex-end`

* Items are packed toward the **end** of the main axis.

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```

### `center`

* Items are packed toward the **center** of the main axis.

```css
.container {
  display: flex;
  justify-content: center;
}
```

### `space-between`

* Items are distributed evenly along the main axis.
* The **first item** is at the start, the **last item** is at the end.

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

### `space-around`

* Items are distributed evenly with **equal space around** each item.
* This means spaces on the ends are half the size of spaces between items.

```css
.container {
  display: flex;
  justify-content: space-around;
}
```

### `space-evenly`

* Items are distributed with **equal spacing** between every item, including edges.

```css
.container {
  display: flex;
  justify-content: space-evenly;
}
```

---

## 2. Main Axis Reminder

* If `flex-direction: row`, the main axis is horizontal.
* If `flex-direction: column`, the main axis is vertical.

---

## 3. Practical Notes

* `justify-content` only affects alignment on the main axis.
* For alignment on the cross axis, use `align-items` or `align-content`.

---

## Further Reading

* [MDN Web Docs: justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

> 📚 This is part of the CSS chapter.

