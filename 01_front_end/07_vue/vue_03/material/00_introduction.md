# Vue.js Fundamentals

## Introduction

Vue.js is a **progressive JavaScript framework** used to build user interfaces and single-page applications (SPAs). It is designed to be incrementally adoptable, meaning you can use Vue for small interactive parts of a page or for full-scale frontend applications.

Vue focuses on:

* Declarative rendering
* Component-based architecture
* Reactive data binding
* Approachability and flexibility

---

## Why Use Vue.js?

* **Easy to learn**: Clean syntax and excellent documentation
* **Reactive system**: Automatic UI updates when data changes
* **Component-based**: Reusable and maintainable code
* **Flexible integration**: Can be used with existing projects
* **Strong ecosystem**: Vue Router, Pinia, Vite, Nuxt

---

## Vue.js Versions

### Vue 2

* Uses Options API only
* Lifecycle hooks like `created`, `mounted`
* Still maintained but not recommended for new projects

### Vue 3 (Recommended)

* Better performance
* Composition API
* Improved TypeScript support
* Smaller bundle size

This documentation focuses on **Vue 3**.

---

## Core Concepts

### 1. Declarative Rendering

Vue allows you to describe **what the UI should look like** based on the application state.

```html
<div id="app">{{ message }}</div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue'
    }
  }
})

app.mount('#app')
```

---

### 2. Reactivity System

Vue automatically tracks state changes and updates the DOM efficiently.

```js
data() {
  return {
    count: 0
  }
}
```

```html
<button @click="count++">{{ count }}</button>
```

---

### 3. Template Syntax

#### Text Interpolation

```html
<p>{{ title }}</p>
```

#### Attribute Binding

```html
<img :src="imageUrl" />
```

#### JavaScript Expressions

```html
<p>{{ count + 1 }}</p>
```

---

## Directives

Directives are special attributes prefixed with `v-`.

### Common Directives

| Directive   | Description           |
| ----------- | --------------------- |
| `v-if`      | Conditional rendering |
| `v-else-if` | Conditional branch    |
| `v-else`    | Fallback condition    |
| `v-show`    | Toggle visibility     |
| `v-for`     | List rendering        |
| `v-bind`    | Bind attributes       |
| `v-on`      | Event handling        |

Example:

```html
<p v-if="isLoggedIn">Welcome</p>
```

---

## Event Handling

```html
<button @click="increment">+</button>
```

```js
methods: {
  increment() {
    this.count++
  }
}
```

Shorthand:

* `v-on:click` → `@click`
* `v-bind:src` → `:src`

---

## Computed Properties

Computed properties are cached and only re-evaluated when dependencies change.

```js
computed: {
  doubleCount() {
    return this.count * 2
  }
}
```

---

## Watchers

Watchers react to data changes and perform side effects.

```js
watch: {
  count(newValue, oldValue) {
    console.log(newValue, oldValue)
  }
}
```

---

## Components

Components are reusable UI blocks.

```js
app.component('BaseButton', {
  template: `<button><slot /></button>`
})
```

Usage:

```html
<BaseButton>Click</BaseButton>
```

---

## Props

Props allow data to be passed from parent to child components.

```js
props: {
  title: String
}
```

```html
<MyComponent title="Hello" />
```

---

## Emits

Child components can emit events to parents.

```js
this.$emit('submit')
```

```html
<MyComponent @submit="handleSubmit" />
```

---

## Lifecycle Hooks

Vue components go through a lifecycle:

* `beforeCreate`
* `created`
* `beforeMount`
* `mounted`
* `beforeUpdate`
* `updated`
* `beforeUnmount`
* `unmounted`

Example:

```js
mounted() {
  console.log('Component mounted')
}
```

---

## Single File Components (SFC)

Vue uses `.vue` files:

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return { title: 'Vue SFC' }
  }
}
</script>

<style scoped>
h1 { color: blue }
</style>
```

---

## Tooling

* **Vite** – Development & build tool
* **Vue Router** – Routing
* **Pinia** – State management
* **Vue Devtools** – Debugging

---

## Further Reading

* [Vue Official Documentation](https://vuejs.org/)
* [Vue Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)
* [Vue Components](https://vuejs.org/guide/essentials/component-basics.html)
* [Vue Reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
* [Vue Lifecycle Hooks](https://vuejs.org/guide/essentials/lifecycle.html)

---

## Summary

Vue.js is a powerful yet approachable framework for building modern web interfaces. With its reactive core, component-based design, and strong ecosystem, Vue is well-suited for both small projects and large-scale applications.

> 📚 This is part of the Vue chapter.
