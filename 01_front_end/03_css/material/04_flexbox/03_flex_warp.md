# CSS Flex Wrap

The `flex-wrap` property in CSS defines whether flex items are forced onto a single line or can wrap onto multiple lines inside a flex container.

---

## 1. Possible Values

### `nowrap` (default)

* All flex items are placed on a single line.
* Items may overflow the container if they do not fit.

```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```

### `wrap`

* Flex items will wrap onto multiple lines if necessary.
* New lines are stacked along the cross axis.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### `wrap-reverse`

* Similar to `wrap`, but the cross axis direction is reversed.
* For example, if items would normally wrap top-to-bottom, they will now wrap bottom-to-top.

```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

---

## 2. Shorthand: `flex-flow`

* The `flex-flow` property is a shorthand for `flex-direction` and `flex-wrap`.

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

---

## 3. Practical Notes

* Use `flex-wrap: wrap` for responsive layouts, allowing items to move onto new lines instead of overflowing.
* Combine with `align-content` to control the spacing between multiple lines.

---

## Further Reading

* [MDN Web Docs: flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

> 📚 This is part of the CSS chapter.
