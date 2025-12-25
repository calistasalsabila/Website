# JavaScript HTTP Requests

## Overview

In web development, **HTTP requests** are used by the client (browser) to communicate with a server in order to retrieve, send, update, or delete data. JavaScript provides multiple ways to perform HTTP requests, ranging from legacy APIs to modern and third-party solutions.

This document covers three common approaches:

* `XMLHttpRequest`
* `fetch` API
* Axios

---

## XMLHttpRequest (XHR)

### Definition

`XMLHttpRequest` is the original JavaScript API used to perform asynchronous HTTP requests. It has been available since the early days of AJAX and is still supported by all browsers.

### Characteristics

* Callback-based
* Verbose syntax
* Requires manual state handling
* Supports synchronous and asynchronous requests (synchronous is discouraged)

### Basic Request Flow

1. Create an `XMLHttpRequest` object
2. Configure the request using `open()`
3. Send the request using `send()`
4. Listen for state changes
5. Process the server response

### Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error("Request failed", xhr.status);
    }
  }
};

xhr.send();
```

### Limitations

* Harder to read and maintain
* Error handling is less intuitive
* Not promise-based

---

## Fetch API

### Definition

The **Fetch API** is a modern, promise-based API for making HTTP requests. It is now the standard approach for handling network requests in modern JavaScript applications.

### Characteristics

* Promise-based
* Cleaner and more readable syntax
* Uses `Response` and `Request` objects
* Does not reject promises on HTTP error status

### Basic Request Flow

1. Call `fetch()` with a URL and options
2. Receive a `Response` object
3. Parse the response body
4. Handle the result or error

### Example

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Fetch error", error);
  });
```

### Key Notes

* Requires manual checking of `response.ok`
* Supports streaming and advanced request control
* Works well with `async/await`

---

## Axios

### Definition

**Axios** is a popular third-party JavaScript library for making HTTP requests. It is built on top of promises and works in both browsers and Node.js.

### Characteristics

* Promise-based
* Automatically transforms JSON data
* Rejects promises on HTTP error status
* Supports request and response interceptors

### Installation

```bash
npm install axios
```

### Example

```javascript
import axios from "axios";

axios.get("https://api.example.com/data")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Axios error", error);
  });
```

### Advantages

* Simpler error handling
* Automatic JSON parsing
* Built-in timeout and cancellation
* Interceptors for global request logic

---

## Comparison

| Feature           | XMLHttpRequest | Fetch API       | Axios             |
| ----------------- | -------------- | --------------- | ----------------- |
| Promise-based     | No             | Yes             | Yes               |
| Syntax            | Verbose        | Clean           | Very clean        |
| Auto JSON parse   | No             | No              | Yes               |
| HTTP error reject | No             | No              | Yes               |
| Interceptors      | No             | No              | Yes               |
| Browser support   | Excellent      | Modern browsers | Depends on bundle |

---

## When to Use Each

### Use XMLHttpRequest when:

* Maintaining legacy codebases
* Supporting very old browsers

### Use Fetch API when:

* Working with modern browsers
* Avoiding external dependencies
* Using native JavaScript features

### Use Axios when:

* Building large-scale applications
* Needing advanced request features
* Working with both browser and Node.js environments

---

## Common Use Cases

* Fetching data from REST APIs
* Submitting forms asynchronously
* Loading content dynamically
* Communicating with backend services

---

## Further Reading

* [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Axios Documentation](https://axios-http.com/docs/intro)

> 📚 This is part of the AJAX chapter.
