# JSON.parse() vs JS Object

This note explains the difference between JSON strings and JavaScript objects, and the functions of `JSON.parse()` and `JSON.stringify()`.

---

## 1. JSON String

* **Data type:** String
* **Format:** Similar to objects `{}` and arrays `[]`, but it is actually text.
* **Purpose:** Can be sent over the network (from server to user), stored in files, or transferred between systems.
* **Example:**

```javascript
const jsonString = '{"name": "Shirone", "age": 20}';
console.log(typeof jsonString); // "string"
```

* **Note:** Cannot access properties directly; must be converted first.

## 2. JS Object

* **Data type:** Object
* **Format:** `{}` and arrays `[]` as in standard JavaScript.
* **Purpose:** Can be used directly in code for logic, data manipulation, looping, etc.
* **Example:**

```javascript
const obj = {name: "Shirone", age: 20};
console.log(typeof obj); // "object"
console.log(obj.name); // "Shirone"
```

## 3. JSON.parse()

* **Function:** Converts a **JSON string** into a **JS Object**.
* **Typical use case:** When data comes **from a server to the user** (or client-side) as JSON string.
* **Syntax:** `JSON.parse(jsonString)`
* **Example:**

```javascript
const jsonString = '{"name": "Shirone", "age": 20}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Shirone"
```

## 4. JSON.stringify()

* **Function:** Converts a **JS Object** into a **JSON string**.
* **Typical use case:** When sending data **from user/client to server** or saving objects to files in JSON format.
* **Syntax:** `JSON.stringify(obj)`
* **Example:**

```javascript
const obj = {name: "Shirone", age: 20};
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Shirone","age":20}'
```

### Summary

* **JSON.parse()** → server/client JSON string → JS Object (useable in JS)
* **JSON.stringify()** → JS Object → JSON string (for sending/storing)

---

## 5. Key Differences

| Aspect                 | JSON String                            | JS Object                                     |
| ---------------------- | -------------------------------------- | --------------------------------------------- |
| Data type              | String                                 | Object                                        |
| Direct property access | No                                     | Yes                                           |
| Typical use            | From server/client JSON → parse to use | Use in JS logic, then stringify to send/store |
| Example                | `'{"name":"Shirone"}'`                 | `{name: "Shirone"}`                           |

**Conclusion:** JSON is a text-based format for data transfer, while JS Object is for direct usage in JavaScript. `parse` is for converting JSON strings to objects, `stringify` is for converting objects to JSON strings.
