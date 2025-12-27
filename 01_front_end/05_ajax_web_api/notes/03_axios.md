# JavaScript and Axios Questions Explained

## 1. Is `show` a built-in function?

* No, `show` is **not a built-in function**. It's a property in the JSON object returned by TVMaze API.
* Example of response:

```json
[
  {
    "score": 17.5,
    "show": {
      "id": 1,
      "name": "Under the Dome",
      "image": {"medium": "https://..."}
    }
  }
]
```

* `result.show` refers to the show object from API.

---

## 2. What is `res.data`?

* `res` is the object returned by Axios when a request is complete.
* `res.data` is the **property of `res` that contains the response body**.
* Type depends on API: object, array, or primitive.
* Not a built-in function, not global, just a property of Axios response object.

**Axios response structure example:**

```js
res = {
  data: {...},       // body from server
  status: 200,      // HTTP status code
  statusText: 'OK',
  headers: {...},   // response headers
  config: {...},    // request config
  request: {...}    // original request object
}
```

---

## 3. Why not `res.isi`?

* Axios **standardizes the response property as `data`**, not `isi`.
* You can assign it to a variable `const isi = res.data`, but original property remains `data`.
* `data` is official property for response body in Axios.

---

## 4. How `params` works in Axios

* `params` in Axios config converts to **query string** automatically.
* Example:

```js
const config = { params: { q: 'ninja' } };
axios.get('http://api.tvmaze.com/search/shows', config);
```

* Produces request URL: `http://api.tvmaze.com/search/shows?q=ninja`
* API server uses `q` parameter to filter results.
* Server returns JSON → Axios parses → `res.data` contains array/object results.

**Flow:**

```
Input keyword -> Axios GET request with params -> API filters shows -> API returns JSON -> res.data -> use getImage(res.data) to display
```

---

This markdown file summarizes your previous questions about JavaScript, Axios, API calls, and how response data works.
