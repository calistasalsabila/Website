# Vue Project Structure

## Introduction

This document explains the **recommended project structure for a Vue 3 application** created using Vite. A clean and consistent structure helps improve scalability, readability, and long-term maintainability.

This structure follows **best practices commonly used in real-world Vue projects**.

---

## Typical Vue 3 Project Structure

```
my-vue-app/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── views/
│   ├── router/
│   ├── stores/
│   ├── composables/
│   ├── layouts/
│   ├── utils/
│   ├── App.vue
│   └── main.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Root Level Files

### `index.html`

The main HTML entry point. Vue mounts the application here.

```html
<div id="app"></div>
```

---

### `package.json`

Defines dependencies, scripts, and project metadata.

Key sections:

* `dependencies`
* `devDependencies`
* `scripts`

---

### `vite.config.js`

Vite configuration file.

Used for:

* Path aliases
* Plugins
* Build configuration

---

## `src/` Directory

The core of the Vue application.

---

### `src/main.js`

Application entry file.

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Responsibilities:

* Create Vue app instance
* Register global plugins
* Mount app to DOM

---

### `src/App.vue`

Root component of the application.

```vue
<template>
  <router-view />
</template>
```

Responsibilities:

* Global layout wrapper
* Root-level logic

---

## `src/assets/`

Stores static assets such as:

* Images
* Fonts
* Global CSS files

Example:

```
assets/
├── images/
├── fonts/
└── main.css
```

---

## `src/components/`

Reusable UI components.

Rules:

* No direct routing logic
* Should be reusable across views

Example:

```
components/
├── BaseButton.vue
├── BaseInput.vue
└── Navbar.vue
```

---

## `src/views/`

Page-level components, usually mapped to routes.

Example:

```
views/
├── HomeView.vue
├── LoginView.vue
└── ProfileView.vue
```

Rule:

* One view per route

---

## `src/router/`

Vue Router configuration.

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```

---

## `src/stores/`

State management using **Pinia**.

Example:

```
stores/
└── userStore.js
```

```js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ user: null })
})
```

---

## `src/composables/`

Reusable logic using the Composition API.

Naming convention:

* Prefix with `use`

Example:

```
composables/
└── useAuth.js
```

```js
export function useAuth() {
  const isLoggedIn = ref(false)
  return { isLoggedIn }
}
```

---

## `src/layouts/`

Layout wrappers for different page structures.

Example:

```
layouts/
├── DefaultLayout.vue
└── AuthLayout.vue
```

Used with slots:

```vue
<slot />
```

---

## `src/utils/`

Helper functions and utilities.

Example:

```
utils/
├── formatDate.js
└── debounce.js
```

---

## Import Alias (`@`)

Vue projects usually configure `@` as an alias for `src/`.

```js
import Navbar from '@/components/Navbar.vue'
```

Improves readability and avoids long relative paths.

---

## Recommended Naming Conventions

* Components: `PascalCase` → `BaseButton.vue`
* Views: `PascalCase + View` → `HomeView.vue`
* Composables: `camelCase` → `useAuth.js`
* Stores: `camelCase + Store` → `userStore.js`

---

## Scaling the Structure

For large projects, structure can be **feature-based**:

```
features/
├── auth/
│   ├── components/
│   ├── views/
│   └── store.js
└── dashboard/
```

---

## Summary

A well-structured Vue project:

* Separates concerns clearly
* Scales well as the app grows
* Makes collaboration easier

This structure is suitable for both **small projects and production-scale Vue applications**.

> 📚 This is part of the Vue chapter.
