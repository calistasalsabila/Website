# CSS Flex Direction

The `flex-direction` property in CSS defines the direction in which flex items are placed in a flex container. It determines the main axis and therefore the direction that flex items follow.

---

## 1. Possible Values

### `row` (default)

* Flex items are placed from **left to right** in a row.
* The main axis is horizontal.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

### `row-reverse`

* Flex items are placed from **right to left** in a row.
* The main axis is still horizontal, but the order is reversed.

```css
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

### `column`

* Flex items are placed from **top to bottom** in a column.
* The main axis is vertical.

```css
.container {
  display: flex;
  flex-direction: column;
}
```

### `column-reverse`

* Flex items are placed from **bottom to top** in a column.
* The main axis is vertical, but the order is reversed.

```css
.container {
  display: flex;
  flex-direction: column-reverse;
}
```

---

## 2. Main Axis vs Cross Axis

* The **main axis** changes depending on `flex-direction`.

  * Row/Row-reverse → horizontal main axis.
  * Column/Column-reverse → vertical main axis.
* The **cross axis** is always perpendicular to the main axis.

---

## 3. Practical Notes

* `flex-direction` works together with properties like `justify-content` (main axis) and `align-items` (cross axis).
* Reversing direction does not change alignment properties, only the order of items.

---

## Further Reading

* [MDN Web Docs: flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

> 📚 This is part of the CSS chapter.
