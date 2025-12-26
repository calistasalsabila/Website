# JavaScript HTTP Requests with Fetch API

This document explains how to make HTTP requests in JavaScript using the **Fetch API**. Fetch is the modern, promise-based approach for performing network requests in web applications and is widely supported in modern browsers.

---

## 1. What is the Fetch API?

The Fetch API provides an interface for fetching resources (including data from APIs) across the network. It replaces older approaches like `XMLHttpRequest` with a cleaner, more flexible, and promise-based design.

Key characteristics:

* Promise-based
* Uses `Request` and `Response` objects
* Works naturally with `async / await`
* Supports modern web standards

---

## 2. Basic Syntax

```javascript
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Parameters

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `url`     | Endpoint or resource URL                                    |
| `options` | Optional configuration object (method, headers, body, etc.) |

---

## 3. Simple GET Request

```javascript
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

---

## 4. Handling HTTP Responses

### 4.1 Checking Response Status

Fetch does **not automatically reject** promises for HTTP errors (4xx, 5xx).

```javascript
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## 5. Using `async / await`

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 6. POST Request with JSON Body

```javascript
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Alice",
    email: "alice@mail.com"
  })
});
```

---

## 7. Sending Headers

```javascript
fetch(url, {
  headers: {
    "Authorization": "Bearer TOKEN",
    "Accept": "application/json"
  }
});
```

---

## 8. Working with Different Response Types

### 8.1 JSON

```javascript
const data = await response.json();
```

### 8.2 Text

```javascript
const text = await response.text();
```

### 8.3 Blob (Files, Images)

```javascript
const blob = await response.blob();
```

---

## 9. Sending Form Data

```javascript
const formData = new FormData();
formData.append("file", fileInput.files[0]);

fetch("/upload", {
  method: "POST",
  body: formData
});
```

No `Content-Type` header is required; the browser sets it automatically.

---

## 10. PUT and DELETE Requests

### PUT

```javascript
fetch("/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Updated Name" })
});
```

### DELETE

```javascript
fetch("/users/1", {
  method: "DELETE"
});
```

---

## 11. Aborting a Fetch Request

```javascript
const controller = new AbortController();

fetch(url, { signal: controller.signal });

controller.abort();
```

---

## 12. CORS Considerations

Fetch is subject to browser CORS rules:

* Server must allow the origin
* Preflight requests may occur for non-simple requests

CORS errors cannot be caught using `catch()` because they are blocked by the browser.

---

## 13. Fetch vs XMLHttpRequest

| Feature        | Fetch  | XMLHttpRequest |
| -------------- | ------ | -------------- |
| Syntax         | Clean  | Verbose        |
| Promises       | Yes    | No             |
| Streaming      | Yes    | Limited        |
| Legacy support | Modern | Excellent      |

---

## 14. Common Mistakes

* Forgetting to check `response.ok`
* Forgetting to `return response.json()`
* Assuming Fetch rejects on HTTP errors
* Manually setting `Content-Type` when using `FormData`

---

## 15. When to Use Fetch

Use Fetch when:

* Building modern web applications
* Working with REST or Web APIs
* Using `async / await`

For older browsers or advanced interceptors, consider libraries like Axios.

---

## Further Reading

* [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN: Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

> 📚 This is part of the AJAX chapter.
