# Web API Fundamentals

## Overview

A **Web API (Application Programming Interface)** is an interface that allows different software systems to communicate over the web using standard protocols, primarily HTTP. Web APIs enable clients such as browsers, mobile applications, or other servers to interact with backend services in a structured and predictable way.

Web APIs are a foundational component of modern web applications, enabling separation between frontend and backend systems.

---

## What is an API?

An **API** defines a contract between a provider and a consumer. It specifies:

* What operations are available
* How to call those operations
* What data formats are used
* What responses to expect

An API abstracts internal implementation details and exposes only what is necessary for interaction.

---

## What Makes an API a Web API?

A **Web API** is an API that:

* Is accessible over the web
* Uses HTTP or HTTPS
* Is identified by URLs (endpoints)
* Communicates using request–response semantics

Web APIs are platform-independent and can be consumed by any client capable of making HTTP requests.

---

## Core Components of a Web API

### Endpoints

An **endpoint** is a specific URL that represents a resource or action.

Example:

```
https://api.example.com/users
```

---

### HTTP Methods

Web APIs rely on standard HTTP methods to define actions:

* **GET**: Retrieve data
* **POST**: Create new data
* **PUT**: Replace existing data
* **PATCH**: Partially update data
* **DELETE**: Remove data

---

### Request Structure

A typical Web API request consists of:

* URL (endpoint)
* HTTP method
* Headers (metadata such as authentication or content type)
* Body (optional, for sending data)

---

### Response Structure

A Web API response usually includes:

* HTTP status code
* Response headers
* Response body (data or error information)

---

## Data Formats

### JSON

* Most common format
* Lightweight and human-readable
* Easily parsed by JavaScript

### XML

* Older standard
* Verbose
* Less common in modern APIs

### Other Formats

* Plain text
* HTML (less common)
* Binary data (files, images)

---

## Common Web API Architectures

### REST (Representational State Transfer)

* Resource-oriented design
* Stateless communication
* Uses standard HTTP methods
* Widely adopted

### GraphQL

* Single endpoint
* Client-defined queries
* Reduces over-fetching and under-fetching

### SOAP

* Protocol-based
* XML-only
* Strict standards
* Mostly used in legacy enterprise systems

---

## HTTP Status Codes

Status codes indicate the result of an API request:

* **2xx**: Success (200 OK, 201 Created)
* **3xx**: Redirection
* **4xx**: Client errors (400 Bad Request, 401 Unauthorized, 404 Not Found)
* **5xx**: Server errors (500 Internal Server Error)

---

## Authentication and Authorization

Web APIs often require security mechanisms such as:

* API keys
* Bearer tokens (JWT)
* OAuth 2.0
* Session-based authentication

These mechanisms control access to protected resources.

---

## CORS (Cross-Origin Resource Sharing)

CORS is a browser security mechanism that controls whether a web page can make requests to a different origin.

Web APIs must explicitly allow cross-origin requests using HTTP headers.

---

## Versioning

API versioning helps manage changes without breaking clients.

Common strategies:

* URL versioning (`/v1/users`)
* Header-based versioning
* Query parameter versioning

---

## Error Handling

Well-designed Web APIs provide consistent error responses that include:

* Error codes
* Human-readable messages
* Optional details for debugging

---

## Typical Use Cases

* Frontend–backend communication
* Mobile application backends
* Third-party integrations
* Microservices communication

---

## Best Practices

* Use clear and consistent endpoints
* Follow HTTP semantics correctly
* Return meaningful status codes
* Validate input data
* Secure endpoints properly
* Document the API

---

## Further Reading

* [MDN: Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
* [MDN: HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [RESTful API Design](https://restfulapi.net/)
* [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)

> 📚 This is part of the AJAX chapter.
