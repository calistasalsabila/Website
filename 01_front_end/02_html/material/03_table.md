# HTML Tables

This document provides a comprehensive guide to creating, structuring, and styling tables in HTML. It covers fundamental syntax, semantic elements, advanced features, accessibility considerations, and best practices for modern web development.

---

## 1. Introduction to HTML Tables

HTML tables are used to present data in a grid of rows and columns. They are ideal for tabular data such as schedules, price lists, or statistical reports. Historically, tables were also used for page layouts, but modern web design recommends using CSS for layout to ensure better accessibility, responsiveness, and maintainability.

Key characteristics:

* Data is organized into rows (`<tr>`) and cells (`<td>` for standard cells, `<th>` for headers).
* Tables can include captions, headers, and footers for clarity and accessibility.
* Tables can be styled extensively using CSS.

---

## 2. Basic Table Structure

A simple HTML table consists of the following core elements:

* `<table>`: The container element for the entire table.
* `<tr>`: Defines a single table row.
* `<th>`: Defines a header cell, displayed as bold and centered by default.
* `<td>`: Defines a standard data cell.

Example:

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
```

In modern HTML, the `border` attribute is obsolete. Use CSS for borders and styling.

---

## 3. Semantic Grouping with `<thead>`, `<tbody>`, `<tfoot>`

To add semantic meaning and improve accessibility, group different parts of the table:

* `<thead>`: Groups header rows, typically containing column titles.
* `<tbody>`: Groups the main body content.
* `<tfoot>`: Groups footer rows, often used for summaries or totals.

Example:

```html
<table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item A</td>
      <td>$10</td>
    </tr>
    <tr>
      <td>Item B</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

This structure helps screen readers and user agents interpret the table correctly and can improve styling with CSS selectors.

---

## 4. Table Captions

Use the `<caption>` element to provide a descriptive title for a table. This improves accessibility and gives context.

Example:

```html
<table>
  <caption>Monthly Sales Report</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$5,000</td>
  </tr>
</table>
```

By default, captions are displayed above the table, but CSS can reposition them.

---

## 5. Merging Cells with `colspan` and `rowspan`

Cells can span multiple columns or rows:

* **`colspan`**: Merges cells horizontally across columns.
* **`rowspan`**: Merges cells vertically across rows.

Example:

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>Email</td>
    <td>Phone</td>
  </tr>
</table>
```

---

## 6. Table Headers and Scope

For accessibility, specify the scope of header cells with the `scope` attribute. This tells screen readers which cells a header relates to.

* `scope="col"`: Header for a column.
* `scope="row"`: Header for a row.

Example:

```html
<table>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
  </tr>
  <tr>
    <th scope="row">Alice</th>
    <td>25</td>
  </tr>
</table>
```

---

## 7. Styling Tables with CSS

Use CSS for styling rather than deprecated HTML attributes. Common properties include:

* `border`: Controls border width, style, and color.
* `border-collapse`: Determines whether table borders collapse into a single border.
* `padding` and `text-align`: Adjust cell spacing and text alignment.
* `nth-child` selectors: Apply alternating row colors for readability.

Example:

```css
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

---

## 8. Responsive Tables

Large tables can be difficult to display on small screens. Common techniques include:

* **Horizontal Scrolling**: Wrap the table in a container with `overflow-x: auto`.
* **Stacked Layouts**: Use CSS to display each row as a block on narrow screens.

Example:

```css
.table-container {
  overflow-x: auto;
}
```

```html
<div class="table-container">
  <table>
    <!-- table content -->
  </table>
</div>
```

---

## 9. Accessibility Considerations

* Always include a `<caption>` or ARIA label for context.
* Use `<th>` elements for headers and the `scope` attribute for clarity.
* Provide summary information where appropriate to describe complex data relationships.
* Ensure sufficient color contrast for text and background.

---

## 10. Best Practices

* Use tables only for tabular data, not for page layout.
* Keep markup clean and semantic for better maintainability and accessibility.
* Combine HTML structure with external CSS for styling and responsive design.
* Test with screen readers and mobile devices to ensure accessibility and usability.

---

## Conclusion

HTML tables are powerful tools for presenting structured data. By using semantic elements, proper headers, captions, and modern CSS techniques, developers can create tables that are both accessible and visually appealing across a wide range of devices and user needs.

---

## Further Reading

* [MDN: HTML Table Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
* [W3C: Tables in HTML](https://www.w3.org/TR/html52/tabular-data.html)

> 📚 This is part of the HTML chapter.

