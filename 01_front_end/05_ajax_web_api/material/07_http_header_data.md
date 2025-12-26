# HTTP Headers and Header Data

## Overview

**HTTP headers** are metadata sent along with HTTP requests and responses. They provide additional information about the request, the client, the server, the payload, caching behavior, authentication, and more.

Headers do not contain the main resource data itself (that is usually in the body), but they strongly influence how requests and responses are processed.

---

## Position of Headers in an HTTP Message

An HTTP message is structured as:

1. Start line (request line or status line)
2. Headers
3. Empty line
4. Optional message body

Example:

```
GET /users HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer <token>

```

---

## What Kind of Data Is Stored in Headers?

HTTP headers store **control and contextual data**, such as:

* Content type and format
* Authentication credentials
* Caching instructions
* Client and server information
* Request conditions
* Security policies

---

## Request Headers

Request headers are sent by the client to describe the request.

### Common Request Headers

#### Host

Specifies the domain name of the server.

```
Host: api.example.com
```

---

#### Accept

Indicates the media types the client can process.

```
Accept: application/json
```

---

#### Content-Type

Describes the format of the request body.

```
Content-Type: application/json
```

---

#### Authorization

Carries authentication credentials.

```
Authorization: Bearer eyJhbGciOi...
```

---

#### User-Agent

Identifies the client software.

```
User-Agent: Mozilla/5.0
```

---

#### Accept-Language

Specifies preferred languages.

```
Accept-Language: en-US,en;q=0.9
```

---

## Response Headers

Response headers are sent by the server to describe the response.

### Common Response Headers

#### Content-Type

Indicates the media type of the response body.

```
Content-Type: application/json
```

---

#### Content-Length

Specifies the size of the response body in bytes.

```
Content-Length: 348
```

---

#### Cache-Control

Controls caching behavior.

```
Cache-Control: no-cache, no-store
```

---

#### Set-Cookie

Sends cookies to the client.

```
Set-Cookie: sessionId=abc123; HttpOnly
```

---

#### Server

Identifies the server software.

```
Server: nginx
```

---

## General Headers

General headers apply to both requests and responses.

Examples:

* Date
* Connection
* Transfer-Encoding

```
Date: Tue, 25 Jun 2024 10:00:00 GMT
```

---

## Custom Headers

Developers can define custom headers, usually prefixed with `X-` or a domain-specific name.

Example:

```
X-Request-ID: 9f3c1a
```

Custom headers are often used for:

* Correlation IDs
* Feature flags
* Client-specific metadata

---

## Headers vs Body Data

| Aspect     | Headers          | Body         |
| ---------- | ---------------- | ------------ |
| Purpose    | Metadata         | Main data    |
| Size       | Small            | Can be large |
| Visibility | Always visible   | Optional     |
| Use case   | Control, context | Payload      |

---

## Headers in Web APIs

In Web APIs, headers are commonly used for:

* Authentication (Authorization)
* Content negotiation (Accept, Content-Type)
* Pagination metadata
* Rate limiting information

Example:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 42
```

---

## Security-Related Headers

### Common Security Headers

* Authorization
* Set-Cookie (with HttpOnly, Secure)
* Strict-Transport-Security
* Content-Security-Policy

These headers help protect against common web vulnerabilities.

---

## CORS-Related Headers

CORS uses specific headers to control cross-origin access.

Examples:

* Access-Control-Allow-Origin
* Access-Control-Allow-Methods
* Access-Control-Allow-Headers

---

## Best Practices

* Use headers only for metadata
* Do not send sensitive data in custom headers unnecessarily
* Use standard headers whenever possible
* Keep header names consistent
* Document all required and optional headers

---

## Common Mistakes

* Putting business data in headers instead of the body
* Misusing Content-Type and Accept
* Forgetting required authentication headers
* Overloading custom headers

---

## Further Reading

* [MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
* [MDN: HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
* [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110)

> 📚 This is part of the AJAX chapter.
