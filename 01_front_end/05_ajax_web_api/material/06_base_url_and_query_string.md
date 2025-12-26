# Base URL and Query String in Web APIs

## Overview

In Web APIs, **Base URL** and **Query String** are essential components of a request URL. They define where a request is sent and how additional parameters are passed to the server.

Understanding these concepts is critical for designing, consuming, and debugging Web APIs.

---

## URL Structure in Web APIs

A typical Web API request URL consists of several parts:

```
https://api.example.com/v1/users?limit=10&page=2
```

Breakdown:

* Protocol: `https`
* Base URL: `api.example.com`
* Path: `/v1/users`
* Query String: `?limit=10&page=2`

---

## Base URL

### Definition

The **Base URL** is the root address of a Web API. It represents the server and often includes versioning information.

Example:

```
https://api.example.com
```

or with versioning:

```
https://api.example.com/v1
```

---

### Purpose of Base URL

* Identifies the API server
* Acts as the foundation for all endpoints
* Simplifies endpoint organization
* Enables environment separation

---

### Base URL and Environments

Different environments usually have different base URLs:

| Environment | Base URL Example                                                   |
| ----------- | ------------------------------------------------------------------ |
| Development | [https://dev.api.example.com](https://dev.api.example.com)         |
| Staging     | [https://staging.api.example.com](https://staging.api.example.com) |
| Production  | [https://api.example.com](https://api.example.com)                 |

---

### Best Practices for Base URL

* Use HTTPS
* Keep it stable
* Include versioning if required
* Avoid embedding resource names directly in the base URL

---

## Path vs Base URL

| Component | Description                    |
| --------- | ------------------------------ |
| Base URL  | Identifies the API host        |
| Path      | Identifies a specific resource |

Example:

```
Base URL: https://api.example.com
Path: /users/42
Full URL: https://api.example.com/users/42
```

---

## Query String

### Definition

A **Query String** is the part of a URL that follows the `?` character. It is used to send additional parameters to the server in a key–value format.

Example:

```
?limit=10&page=2
```

---

### Query String Syntax

* Starts with `?`
* Key–value pairs separated by `&`
* Keys and values are separated by `=`

Example:

```
?search=book&sort=price&order=asc
```

---

## Common Use Cases for Query Strings

### Filtering

```
GET /products?category=electronics
```

### Sorting

```
GET /products?sort=price&order=desc
```

### Pagination

```
GET /products?page=2&limit=20
```

### Searching

```
GET /users?keyword=john
```

---

## Query String vs Path Parameters

| Aspect   | Query String          | Path Parameter      |
| -------- | --------------------- | ------------------- |
| Purpose  | Modify or filter data | Identify a resource |
| Optional | Usually optional      | Usually required    |
| Example  | ?page=1               | /users/1            |

---

## Encoding Query Strings

Query strings must be URL-encoded to ensure valid transmission.

Example:

```
?q=hello%20world
```

Spaces and special characters must be properly encoded.

---

## Query Strings in HTTP Methods

* Commonly used with GET requests
* Can be used with other methods if needed
* Should not contain sensitive data

---

## Limitations of Query Strings

* URL length limits
* Visible in browser history and logs
* Not suitable for sensitive information

---

## Best Practices for Query Strings

* Use clear and consistent parameter names
* Keep query strings short
* Avoid complex nested structures
* Document all supported parameters

---

## Common Mistakes

* Putting required identifiers in query strings instead of paths
* Using query strings for sensitive data
* Inconsistent parameter naming

---

## Example Combined Usage

```
GET https://api.example.com/v1/posts?author=123&limit=5
```

Explanation:

* Base URL: `https://api.example.com/v1`
* Endpoint path: `/posts`
* Query parameters: `author=123`, `limit=5`

---

## Further Reading

* [MDN: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
* [MDN: URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
* [RESTful API Design](https://restfulapi.net/)
* [Query-String](https://www.tvmaze.com/api?utm_source=chatgpt.com)


> 📚 This is part of the AJAX chapter.
