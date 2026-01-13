# Vue Options API vs Composition API

## Introduction

Vue provides two main APIs for writing components:

* **Options API** – the traditional and more declarative approach
* **Composition API** – a more flexible and logic-centric approach

Both APIs are officially supported in **Vue 3** and can coexist in the same project.

---

## Overview

| Aspect            | Options API            | Composition API       |
| ----------------- | ---------------------- | --------------------- |
| Introduced        | Vue 2                  | Vue 3                 |
| Style             | Option-based           | Function-based        |
| Code organization | By options             | By feature/logic      |
| Reusability       | Mixins                 | Composables           |
| Learning curve    | Easier for beginners   | Steeper               |
| Scalability       | Limited for large apps | Better for large apps |

---

## Options API

### Definition

Options API organizes component logic into predefined options such as `data`, `methods`, `computed`, and `watch`.

---

### Basic Example

```vue
<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

---

### Key Characteristics

* Logic is grouped by **option type**
* Uses `this` context
* Clear structure for small to medium components

---

### Common Options

* `data()` – component state
* `methods` – functions
* `computed` – derived state
* `watch` – side effects
* `props` – input data
* `emits` – output events
* Lifecycle hooks (`mounted`, `updated`, etc.)

---

### Pros

* Easy to read and understand
* Beginner-friendly
* Familiar for Vue 2 users

---

### Cons

* Related logic is scattered across options
* Harder to scale and refactor
* Logic reuse relies on mixins (can cause conflicts)

---

## Composition API

### Definition

Composition API allows organizing component logic using functions inside the `setup()` function.

---

### Basic Example

```vue
<template>
  <button @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}
</script>
```

---

### Key Characteristics

* Logic is grouped by **feature or concern**
* No `this` keyword
* Uses reactive primitives like `ref` and `reactive`

---

### Core APIs

* `ref()` – reactive primitive value
* `reactive()` – reactive object
* `computed()` – derived reactive state
* `watch()` / `watchEffect()` – side effects
* Lifecycle hooks (`onMounted`, `onUpdated`, etc.)

---

### Pros

* Better logic reuse via composables
* Scales well for large applications
* Easier testing and refactoring
* Better TypeScript support

---

### Cons

* More abstract for beginners
* Requires understanding reactivity system
* Slightly more verbose for simple components

---

## Logic Organization Comparison

### Options API (Scattered Logic)

```js
data() { ... }
methods: { ... }
computed: { ... }
watch: { ... }
```

---

### Composition API (Grouped Logic)

```js
function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
}
```

---

## Reusability

### Options API

* Uses mixins
* Risk of naming collisions
* Hard to trace data sources

---

### Composition API

* Uses composables (`useX` functions)
* Explicit imports
* Clear dependencies

---

## Lifecycle Hooks Comparison

| Options API   | Composition API |
| ------------- | --------------- |
| `mounted()`   | `onMounted()`   |
| `updated()`   | `onUpdated()`   |
| `unmounted()` | `onUnmounted()` |

Example:

```js
onMounted(() => {
  console.log('Mounted')
})
```

---

## When to Use Options API

* Learning Vue fundamentals
* Small to medium components
* Simple applications

---

## When to Use Composition API

* Large-scale applications
* Complex logic
* Heavy logic reuse
* TypeScript-based projects

---

## Can They Be Mixed?

Yes. Vue allows mixing Options API and Composition API in the same project, but **not recommended within the same component** for clarity.

---

## Recommended Learning Path

1. Learn Options API to understand Vue basics
2. Move to Composition API for scalable architecture
3. Use Composition API as the default for new projects

---

## Summary

* Options API is simple, structured, and beginner-friendly
* Composition API is flexible, scalable, and powerful
* Composition API is the preferred choice for modern Vue applications

Both APIs are first-class citizens in Vue 3.

> 📚 This is part of the Vue chapter.

