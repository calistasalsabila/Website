# Flexbox Explanation: Direction, Justify, Align, and Wrap

## Purpose of `flex-direction`
`flex-direction` defines the **main axis** of a flex container, which determines how flex items are placed inside the container. It also determines whether the axis runs horizontally or vertically.

Available values:
- **row (default):** Items placed left → right. Main axis = horizontal, cross axis = vertical.
- **row-reverse:** Items placed right → left. Main axis = horizontal (reversed), cross axis = vertical.
- **column:** Items placed top → bottom. Main axis = vertical, cross axis = horizontal.
- **column-reverse:** Items placed bottom → top. Main axis = vertical (reversed), cross axis = horizontal.

---

## Purpose of `justify-content`
`justify-content` controls alignment of items **along the main axis**. Its behavior depends on the `flex-direction`.

Examples:
- With `flex-direction: row;` → `justify-content` manages horizontal alignment (left, center, right, space-between, etc.).
- With `flex-direction: column;` → `justify-content` manages vertical alignment (top, center, bottom).

---

## Purpose of `align-items`
`align-items` controls alignment of items **along the cross axis** (the axis perpendicular to the main axis).

Examples:
- With `flex-direction: row;` → cross axis = vertical → `align-items` manages top, center, bottom.
- With `flex-direction: column;` → cross axis = horizontal → `align-items` manages left, center, right.

---

## Purpose of `flex-wrap`
`flex-wrap` defines whether items are forced into a single line or allowed to wrap onto multiple lines when they overflow the container.

Available values:
- **nowrap (default):** All items are placed on a single line.
- **wrap:** Items wrap onto multiple lines, from top to bottom if `row`, or left to right if `column`.
- **wrap-reverse:** Items wrap onto multiple lines in the reverse direction.

---

## Summary
1. **flex-direction** sets the orientation of the main axis (row or column, normal or reversed).
2. **justify-content** aligns items along the main axis.
3. **align-items** aligns items along the cross axis.
4. **flex-wrap** controls whether items stay on one line or wrap onto new lines.

> 📚 This is part of the CSS chapter.
