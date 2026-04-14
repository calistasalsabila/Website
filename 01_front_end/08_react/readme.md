# React Installation & Setup Guide

## What is React?

React is a JavaScript library used to build interactive User Interfaces (UI), especially for web applications.

* Developed by Facebook
* Component-based architecture
* Fast rendering using Virtual DOM

---

## Goals

* Understand how to install React
* Run a React project locally
* Know the basic project structure

---

## Requirements

Before installing React, make sure you have:

* Node.js (recommended version ≥ 18)
* npm or yarn

### Check Installation

```bash
node -v
npm -v
```

---

## Method 1: Using Vite (Recommended)

Vite is faster and lighter than Create React App.

### Installation

```bash
npm create vite@latest my-app
```

### Select Options

* Framework → React
* Variant → JavaScript / TypeScript

### Install Dependencies

```bash
cd my-app
npm install
```

### Run Project

```bash
npm run dev
```

### Output

```
Local: http://localhost:5173/
```

---

## Method 2: Using Create React App (CRA)

### Installation

```bash
npx create-react-app my-app
```

### Run Project

```bash
cd my-app
npm start
```

### Output

```
http://localhost:3000/
```

---

## Basic Project Structure

```
my-app/
│── node_modules/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
```

---

## Basic Example

### App.jsx

```jsx
function App() {
  return (
    <h1>Hello, React</h1>
  );
}

export default App;
```

### main.jsx (Vite)

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

## Notes

* Vite is faster for development
* CRA is easier for beginners but heavier
* React uses JSX (JavaScript + HTML)

---

## Conclusion

React is a powerful library for building modern web apps. Using Vite makes development faster and more efficient.

---

## Next Step

* Learn JSX
* Learn Components
* Learn Props & State
* Learn Hooks (useState, useEff)

> 📚 This is part of the React chapter.
