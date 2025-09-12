# HTML Fundamentals You Need to Know

This document provides a comprehensive guide to the essential topics covered in the HTML learning track shown in the provided image. It explains fundamental HTML concepts, structure, and common elements used to build basic web pages.

---

## 1. Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and layout of a web document by using a variety of tags and attributes. Every web page you see in a browser is built on HTML.

**Key Concepts:**

* HTML is not a programming language; it is a markup language.
* Uses a series of elements (tags) to describe the content and its purpose.
* Works in combination with CSS for styling and JavaScript for interactivity.

A basic HTML document starts with a `<!DOCTYPE html>` declaration, followed by the `<html>` root element, which contains a `<head>` section for metadata and a `<body>` section for visible content.

---

## 2. Creating Your First HTML File

To create your first HTML file:

1. Open a text editor (e.g., VS Code, Sublime Text, Notepad++).
2. Save a file with the extension `.html` (for example, `index.html`).
3. Add the minimal structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

4. Open the file in a web browser to view the result.

---

## 3. Formatting Paragraphs in HTML

Paragraphs are created using the `<p>` tag. Paragraphs automatically add space before and after the content.

Example:

```html
<p>This is a paragraph of text in HTML.</p>
<p>This is another paragraph, which appears on a new line.</p>
```

You can use inline formatting elements inside paragraphs, such as `<strong>` for bold or `<em>` for italics.

---

## 4. Formatting Headings in HTML

Headings are used to define the hierarchy of content and range from `<h1>` (largest) to `<h6>` (smallest).

Example:

```html
<h1>Main Title</h1>
<h2>Subheading Level 2</h2>
<h3>Subheading Level 3</h3>
```

Headings provide semantic meaning to content and improve accessibility and SEO.

---

## 5. Understanding the Full HTML Document Structure

A complete HTML document includes:

* `<!DOCTYPE html>`: Informs the browser of the HTML version.
* `<html>`: Root element.
* `<head>`: Contains metadata like `<title>`, `<meta>`, and links to CSS or JavaScript.
* `<body>`: Contains all the visible content, such as text, images, and links.

Example template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Main Content</h1>
    <p>This is a sample web page.</p>
</body>
</html>
```

---

## 6. Creating Lists in HTML

HTML supports ordered lists (numbered) and unordered lists (bulleted).

* **Unordered List:**

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
</ul>
```

* **Ordered List:**

```html
<ol>
    <li>First Item</li>
    <li>Second Item</li>
</ol>
```

Lists can be nested and styled with CSS.

---

## 7. Creating Links in HTML

Links are created with the `<a>` (anchor) tag and the `href` attribute, which specifies the destination URL.

Example:

```html
<a href="https://www.example.com">Visit Example</a>
```

You can also create links to other pages in your website using relative paths:

```html
<a href="about.html">About Us</a>
```

Attributes like `target="_blank"` open links in a new tab.

---

## 8. Adding Images in HTML

Images are embedded using the `<img>` tag, which requires the `src` attribute to define the image path and the `alt` attribute for alternative text.

Example:

```html
<img src="images/photo.jpg" alt="A description of the photo" width="600" height="400">
```

The `alt` text improves accessibility and provides context when the image cannot be loaded.

---

## 9. Using Comments in HTML

Comments are useful for adding notes or explanations within the HTML code. They do not appear on the rendered page.

Example:

```html
<!-- This is a comment -->
<p>This content is visible on the page.</p>
```

Comments help maintain code clarity, especially in complex documents.

---

## Best Practices

* Use semantic HTML elements where appropriate (`<header>`, `<main>`, `<footer>`, `<section>`, etc.).
* Keep your code organized and properly indented.
* Always include `alt` attributes for images.
* Validate your HTML using tools like the W3C Validator to ensure standards compliance.

---

## Conclusion

This guide covers the fundamental elements and structure of HTML required to start building web pages. Mastering these basics lays the foundation for learning CSS for styling and JavaScript for interactivity, enabling you to create full-featured websites.

> 📚 This is part of the HTML chapter.
