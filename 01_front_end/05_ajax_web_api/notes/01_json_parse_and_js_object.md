# JSON.parse() vs JS Object

This note explains the difference between JSON strings and JavaScript objects, and the function of `JSON.parse()`.

---

## 1. JSON String

* **Data type:** String
* **Format:** Similar to objects `{}` and arrays `[]`, but it is actually text.
* **Purpose:** Can be sent over the network, stored in files, or transferred between systems.
* **Example:**

```javascript
const jsonString = '{"name": "Calista", "age": 20}';
console.log(typeof jsonString); // "string"
```

* **Note:** Cannot access properties directly; must be converted first.

## 2. JS Object

* **Data type:** Object
* **Format:** `{}` and arrays `[]` as in standard JavaScript.
* **Purpose:** Can be used directly in code for logic, data manipulation, looping, etc.
* **Example:**

```javascript
const obj = {name: "Calista", age: 20};
console.log(typeof obj); // "object"
console.log(obj.name); // "Calista"
```

## 3. JSON.parse()

* **Function:** Converts a **JSON string** into a **JS Object**.
* **Syntax:** `JSON.parse(jsonString)`
* **Example:**

```javascript
const jsonString = '{"name": "Calista", "age": 20}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Calista"
```

### Summary

* **Before parse:** JSON is a string → `typeof jsonString === "string"`
* **After parse:** JSON becomes an object → properties can be accessed → `obj.name`

---

## 4. Key Differences

| Aspect                 | JSON String            | JS Object                 |
| ---------------------- | ---------------------- | ------------------------- |
| Data type              | String                 | Object                    |
| Direct property access | No                     | Yes                       |
| Can be sent/stored     | Yes                    | No (must stringify first) |
| Example                | `'{"name":"Calista"}'` | `{name: "Calista"}`       |

**Conclusion:** JSON is a text-based data format, while JS Object is data that can be directly used in JavaScript.
