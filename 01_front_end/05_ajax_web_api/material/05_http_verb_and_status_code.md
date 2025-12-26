# HTTP Methods (HTTP Verbs)

## Overview

**HTTP methods**, also known as **HTTP verbs**, define the action to be performed on a resource identified by a URL. They are a fundamental part of the HTTP protocol and are heavily used in Web APIs, especially RESTful APIs.

Correct usage of HTTP methods improves API clarity, consistency, and predictability.

---

## What Is a Resource?

In the context of Web APIs, a **resource** is any identifiable entity that can be accessed via a URL.

Examples:

```
/users
/users/1
/posts/42/comments
```

HTTP methods describe **what to do** with these resources.

---

## Common HTTP Methods

The most commonly used HTTP methods are:

* GET
* POST
* PUT
* PATCH
* DELETE

Each method has a specific semantic meaning defined by the HTTP specification.

---

## GET

### Purpose

Retrieve data from the server.

### Characteristics

* Read-only operation
* Should not modify server state
* Safe and idempotent
* Can be cached

### Example Use Cases

* Fetch a list of users
* Retrieve a single resource by ID

### Example Request

```
GET /users/1 HTTP/1.1
```

### Notes

* GET requests should not include a request body
* Query parameters are commonly used for filtering, sorting, and pagination

---

## POST

### Purpose

Send data to the server to create a new resource or trigger an action.

### Characteristics

* Not idempotent
* Modifies server state
* Request body is required
* Not cached by default

### Example Use Cases

* Create a new user
* Submit a form
* Authenticate a user

### Example Request

```
POST /users HTTP/1.1
```

---

## PUT

### Purpose

Replace an existing resource entirely with new data.

### Characteristics

* Idempotent
* Modifies server state
* Requires full representation of the resource

### Example Use Cases

* Update all fields of a user

### Example Request

```
PUT /users/1 HTTP/1.1
```

### Notes

* Missing fields may be removed or reset
* Should be used when updating the entire resource

---

## PATCH

### Purpose

Partially update an existing resource.

### Characteristics

* Usually idempotent
* Modifies server state
* Sends only the fields to be changed

### Example Use Cases

* Update a user's email
* Change a single attribute

### Example Request

```
PATCH /users/1 HTTP/1.1
```

---

## DELETE

### Purpose

Remove a resource from the server.

### Characteristics

* Idempotent
* Modifies server state
* Response body is optional

### Example Use Cases

* Delete a user
* Remove a post

### Example Request

```
DELETE /users/1 HTTP/1.1
```

---

## HEAD

### Purpose

Retrieve response headers without the response body.

### Characteristics

* Safe and idempotent
* Useful for checking resource metadata

### Example Use Cases

* Check if a resource exists
* Validate cache freshness

---

## OPTIONS

### Purpose

Describe the communication options for a resource.

### Characteristics

* Safe and idempotent
* Commonly used in CORS preflight requests

### Example Use Cases

* Determine allowed HTTP methods
* CORS validation

---

## CONNECT

### Purpose

Establish a tunnel to the server.

### Common Usage

* HTTPS connections through proxies

---

## TRACE

### Purpose

Echo the received request for diagnostic purposes.

### Notes

* Rarely used
* Often disabled for security reasons

---

## Safe vs Idempotent Methods

### Safe Methods

Safe methods do not modify server state:

* GET
* HEAD
* OPTIONS

### Idempotent Methods

Idempotent methods produce the same result when executed multiple times:

* GET
* PUT
* PATCH (typically)
* DELETE

---

## HTTP Methods in RESTful APIs

### CRUD Mapping

| CRUD Operation   | HTTP Method |
| ---------------- | ----------- |
| Create           | POST        |
| Read             | GET         |
| Update (Full)    | PUT         |
| Update (Partial) | PATCH       |
| Delete           | DELETE      |

---

## Common Mistakes

* Using GET to modify data
* Using POST for updates instead of PUT/PATCH
* Ignoring idempotency
* Inconsistent method usage

---

## Best Practices

* Use methods according to their semantics
* Keep APIs predictable
* Avoid overloading POST
* Return appropriate HTTP status codes

---

## Relationship with HTTP Status Codes

HTTP methods work together with status codes to communicate results:

* 200 OK
* 201 Created
* 204 No Content
* 400 Bad Request
* 404 Not Found
* 500 Internal Server Error

---

## Further Reading

* [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)
* [RESTful API Design](https://restfulapi.net/)

> 📚 This is part of the AJAX chapter.
