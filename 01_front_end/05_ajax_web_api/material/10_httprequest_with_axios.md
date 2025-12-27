# JavaScript HTTP Requests with Axios

This document explains how to make HTTP requests in JavaScript using **Axios**, a popular third-party HTTP client library. Axios provides a clean API, automatic JSON handling, request/response interceptors, and better error handling compared to the native Fetch API.

---

## 1. What is Axios?

Axios is a promise-based HTTP client for:

* Browsers
* Node.js

Key features:

* Automatic JSON request/response transformation
* Request and response interceptors
* Built-in timeout support
* Better error handling
* CSRF protection support (browser)

---

## 2. Installing Axios

### Using npm

```bash
npm install axios
```

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## 3. Basic Axios Syntax

```javascript
axios(config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

Axios returns a Promise that resolves to a **response object**.

---

## 4. Axios Response Object

```javascript
{
  data,      // response body
  status,    // HTTP status code
  statusText,// status message
  headers,   // response headers
  config,    // request config
  request    // underlying request
}
```

---

## 5. GET Request

```javascript
axios.get("https://api.example.com/users")
  .then(response => {
    console.log(response.data);
  });
```

---

## 6. Query Parameters

```javascript
axios.get("https://api.example.com/users", {
  params: {
    page: 1,
    limit: 10
  }
});
```

Axios automatically converts the `params` object into a query string.

---

## 7. POST Request with JSON Body

```javascript
axios.post("https://api.example.com/users", {
  name: "Alice",
  email: "alice@mail.com"
});
```

Axios automatically sets the `Content-Type` header to `application/json`.

---

## 8. PUT, PATCH, and DELETE Requests

### PUT

```javascript
axios.put("/users/1", {
  name: "Updated Name"
});
```

### PATCH

```javascript
axios.patch("/users/1", {
  email: "new@mail.com"
});
```

### DELETE

```javascript
axios.delete("/users/1");
```

---

## 9. Sending Custom Headers

```javascript
axios.get(url, {
  headers: {
    Authorization: "Bearer TOKEN",
    Accept: "application/json"
  }
});
```

---

## 10. Handling Errors in Axios

Axios rejects the promise for HTTP errors (status >= 400).

```javascript
axios.get(url)
  .catch(error => {
    if (error.response) {
      console.error(error.response.status);
      console.error(error.response.data);
    } else if (error.request) {
      console.error("No response received");
    } else {
      console.error(error.message);
    }
  });
```

---

## 11. Using Async / Await

```javascript
async function getUsers() {
  try {
    const response = await axios.get("/users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 12. Creating an Axios Instance

```javascript
const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

api.get("/users");
```

---

## 13. Request and Response Interceptors

### Request Interceptor

```javascript
api.interceptors.request.use(config => {
  config.headers.Authorization = "Bearer TOKEN";
  return config;
});
```

### Response Interceptor

```javascript
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.error("Unauthorized");
    }
    return Promise.reject(error);
  }
);
```

---

## 14. Sending FormData (File Upload)

```javascript
const formData = new FormData();
formData.append("file", fileInput.files[0]);

axios.post("/upload", formData);
```

Axios automatically sets the correct `Content-Type`.

---

## 15. Canceling Requests

```javascript
const controller = new AbortController();

axios.get(url, { signal: controller.signal });

controller.abort();
```

---

## 16. Axios vs Fetch

| Feature        | Axios                 | Fetch           |
| -------------- | --------------------- | --------------- |
| JSON handling  | Automatic             | Manual          |
| Error handling | Rejects on HTTP error | Manual check    |
| Interceptors   | Yes                   | No              |
| Browser & Node | Yes                   | Browser-focused |

---

## 17. Common Mistakes

* Forgetting to use `response.data`
* Not configuring a base URL
* Creating multiple Axios instances unnecessarily
* Ignoring interceptors for auth handling

---

## 18. When to Use Axios

Use Axios when:

* Building medium to large applications
* Handling authentication tokens
* Requiring interceptors or global config

Fetch may be sufficient for simple or lightweight use cases.

---

## Further Reading

* [Axios GitHub Repository](https://github.com/axios/axios)
* [Axios Documentation](https://axios-http.com/docs/intro)
* [MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

> 📚 This is part of the AJAX chapter.
