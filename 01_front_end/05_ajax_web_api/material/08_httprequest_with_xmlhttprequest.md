# JavaScript HTTP Requests with `XMLHttpRequest`

This document explains how to make HTTP requests in JavaScript using **`XMLHttpRequest` (XHR)**. Although modern JavaScript often uses `fetch()` or libraries like Axios, understanding `XMLHttpRequest` is still important for legacy code, low-level control, and learning how HTTP communication works under the hood.

---

## 1. What is `XMLHttpRequest`?

`XMLHttpRequest` is a built-in JavaScript object that allows web applications to:

* Send HTTP requests to a server
* Receive responses asynchronously or synchronously
* Exchange data without reloading the page

Despite its name, `XMLHttpRequest` is **not limited to XML**. It can handle:

* JSON
* Plain text
* HTML
* XML
* Binary data

---

## 2. Basic Workflow of `XMLHttpRequest`

Every XHR request follows the same fundamental steps:

1. Create an `XMLHttpRequest` object
2. Configure the request using `open()`
3. Attach event listeners
4. Send the request using `send()`
5. Handle the response

---

## 3. Creating an XMLHttpRequest Object

```javascript
const xhr = new XMLHttpRequest();
```

This creates a new XHR instance that can be configured and sent.

---

## 4. Configuring the Request: `open()`

```javascript
xhr.open(method, url, async);
```

### Parameters

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| `method`  | HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.) |
| `url`     | Endpoint URL                                       |
| `async`   | `true` (default) for async, `false` for sync       |

### Example

```javascript
xhr.open("GET", "https://api.example.com/users", true);
```

---

## 5. Sending the Request: `send()`

```javascript
xhr.send();
```

For requests with a body (e.g., POST):

```javascript
xhr.send(JSON.stringify({ name: "Alice" }));
```

---

## 6. Handling Responses

### 6.1 `readyState`

`readyState` indicates the current state of the request.

| Value | State            | Description             |
| ----- | ---------------- | ----------------------- |
| 0     | UNSENT           | Request not initialized |
| 1     | OPENED           | `open()` called         |
| 2     | HEADERS_RECEIVED | Headers received        |
| 3     | LOADING          | Response is loading     |
| 4     | DONE             | Request completed       |

---

### 6.2 `onreadystatechange`

```javascript
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
```

---

### 6.3 `onload` (Recommended)

```javascript
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error("Request failed");
  }
};
```

---

### 6.4 Error Handling

```javascript
xhr.onerror = function () {
  console.error("Network error occurred");
};
```

---

## 7. Working with JSON Responses

```javascript
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
```

---

## 8. Setting Request Headers

Headers must be set **after `open()` and before `send()`**.

```javascript
xhr.open("POST", "https://api.example.com/users");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ name: "Alice" }));
```

---

## 9. GET Request Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();
```

---

## 10. POST Request Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("POST", "https://api.example.com/users", true);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function () {
  if (xhr.status === 201) {
    console.log("User created");
  }
};

xhr.send(JSON.stringify({
  name: "Alice",
  email: "alice@mail.com"
}));
```

---

## 11. Synchronous Requests (Not Recommended)

```javascript
xhr.open("GET", "https://api.example.com/users", false);
xhr.send();
console.log(xhr.responseText);
```

Synchronous requests block the main thread and can freeze the UI. Avoid using them in production.

---

## 12. Aborting a Request

```javascript
xhr.abort();
```

Used when a request is no longer needed (e.g., user navigates away).

---

## 13. XMLHttpRequest vs Fetch API

| Feature        | XMLHttpRequest | Fetch                   |
| -------------- | -------------- | ----------------------- |
| Syntax         | Verbose        | Cleaner & Promise-based |
| Promises       | No             | Yes                     |
| Legacy support | Excellent      | Modern browsers         |
| Streaming      | Limited        | Better support          |

---

## 14. Common Mistakes

* Forgetting to parse JSON manually
* Using synchronous requests
* Not checking HTTP status codes
* Setting headers after `send()`

---

## 15. When Should You Use XMLHttpRequest?

Use `XMLHttpRequest` when:

* Working with legacy codebases
* Needing fine-grained control over requests
* Learning how AJAX works internally

For modern applications, prefer `fetch()` unless compatibility or constraints require XHR.

---

## Further Reading

* [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [MDN: Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [MDN: HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

> 📚 This is part of the AJAX chapter.
