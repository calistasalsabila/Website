# JSON Fundamentals

## Overview

**JSON (JavaScript Object Notation)** is a lightweight data-interchange format commonly used in web applications to exchange data between clients and servers. It is language-independent, human-readable, and easy for machines to parse and generate.

JSON is the most widely used data format in Web APIs and modern web development.

---

## What is JSON?

JSON is a text-based format that represents structured data using key–value pairs and ordered lists. Although it originated from JavaScript, JSON is supported by nearly all programming languages.

Key properties:

* Lightweight
* Text-based
* Easy to read and write
* Easy to parse and generate

---

## JSON Syntax Rules

JSON has strict syntax rules:

* Data is represented as **name–value pairs**
* Keys must be **strings** enclosed in double quotes
* Values must be one of the supported data types
* Objects are enclosed in `{}`
* Arrays are enclosed in `[]`
* Trailing commas are not allowed

---

## JSON Data Types

### String

```json
"Hello World"
```

### Number

```json
42
```

### Boolean

```json
true
```

### Null

```json
null
```

### Object

```json
{
  "id": 1,
  "name": "Alice",
  "active": true
}
```

### Array

```json
[
  "apple",
  "banana",
  "orange"
]
```

---

## JSON Objects

A JSON object is a collection of key–value pairs.

Example:

```json
{
  "user": {
    "id": 10,
    "username": "admin",
    "email": "admin@example.com"
  }
}
```

Characteristics:

* Keys must be unique
* Order of keys is not guaranteed
* Nested objects are allowed

---

## JSON Arrays

A JSON array is an ordered list of values.

Example:

```json
{
  "roles": ["admin", "editor", "viewer"]
}
```

Arrays can contain:

* Primitive values
* Objects
* Other arrays

---

## JSON in JavaScript

### Parsing JSON

Converts a JSON string into a JavaScript object:

```javascript
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);
```

### Stringifying JSON

Converts a JavaScript object into a JSON string:

```javascript
const data = { name: "Alice", age: 25 };
const json = JSON.stringify(data);
```

---

## JSON in Web APIs

Web APIs commonly use JSON for:

* Request bodies
* Response payloads
* Error messages

Example response:

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Post title"
  }
}
```

---

## JSON vs JavaScript Object

| Aspect    | JSON               | JavaScript Object |
| --------- | ------------------ | ----------------- |
| Format    | Text               | In-memory object  |
| Quotes    | Double quotes only | Single or double  |
| Functions | Not allowed        | Allowed           |
| Comments  | Not allowed        | Allowed           |

---

## Common JSON Mistakes

* Using single quotes instead of double quotes
* Adding trailing commas
* Including comments
* Forgetting to quote keys

---

## Validation and Formatting

JSON can be:

* Validated to ensure correct syntax
* Minified for efficient transfer
* Pretty-printed for readability

Many tools and editors provide built-in JSON validation.

---

## Security Considerations

* Never trust JSON input blindly
* Validate and sanitize parsed data
* Avoid exposing sensitive information

---

## Typical Use Cases

* Web API communication
* Configuration files
* Data storage and transfer
* Inter-service communication

---

## Best Practices

* Keep JSON structures simple
* Use consistent key naming
* Avoid deeply nested objects when possible
* Return predictable response shapes

---

## Further Reading

* [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
* [JSON Official Specification](https://www.json.org/json-en.html)
* [MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

> 📚 This is part of the AJAX chapter.
