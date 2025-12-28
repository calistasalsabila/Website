# Tailwind CSS: Responsive & Hover States

This document explains how **responsive utilities** and **hover (state) variants** work in Tailwind CSS. These two concepts are fundamental for building modern, adaptive, and interactive user interfaces.

The explanations are based on Tailwind’s **mobile-first** and **utility-first** design philosophy.

---

## 1. Responsive Design in Tailwind CSS

Tailwind CSS uses a **mobile-first approach**, meaning:

* Base utilities apply to all screen sizes
* Prefixed utilities apply starting from a breakpoint and up

---

## 2. Default Responsive Breakpoints

Tailwind provides the following default breakpoints:

| Prefix | Min Width |
| ------ | --------- |
| `sm:`  | 640px     |
| `md:`  | 768px     |
| `lg:`  | 1024px    |
| `xl:`  | 1280px    |
| `2xl:` | 1536px    |

These prefixes can be attached to **any utility class**.

---

## 3. Basic Responsive Example

```html
<p class="text-sm md:text-base lg:text-lg">
  Responsive text size
</p>
```

Behavior:

* Mobile → `text-sm`
* Medium screens → `text-base`
* Large screens → `text-lg`

---

## 4. Responsive Layout Example

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="bg-gray-200 p-4">Item 1</div>
  <div class="bg-gray-300 p-4">Item 2</div>
</div>
```

Behavior:

* Mobile → column layout
* Medium screens and up → row layout

---

## 5. How Responsive Utilities Work Internally

A responsive utility like:

```html
md:text-lg
```

Is compiled into:

```css
@media (min-width: 768px) {
  .md\\:text-lg {
    font-size: 1.125rem;
  }
}
```

This shows that responsive prefixes are simply media queries under the hood.

---

## 6. Hover State in Tailwind CSS

Tailwind supports state-based variants such as `hover`, `focus`, `active`, and more.

The most commonly used is `hover:`.

---

## 7. Basic Hover Example

```html
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
  Hover Me
</button>
```

Behavior:

* Normal → `bg-blue-500`
* On hover → `bg-blue-600`

---

## 8. Hover with Transitions

Hover effects are commonly combined with transition utilities:

```html
<button class="bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
  Smooth Hover
</button>
```

This creates a smooth color animation.

---

## 9. Combining Responsive and Hover States

Responsive and hover variants can be stacked together:

```html
<button class="bg-blue-500 md:bg-green-500 hover:bg-blue-600 md:hover:bg-green-600">
  Responsive Hover Button
</button>
```

Behavior:

* Mobile hover → blue
* Desktop hover → green

---

## 10. Common State Variants

Frequently used state prefixes:

* `hover:`
* `focus:`
* `focus-visible:`
* `active:`
* `disabled:`
* `group-hover:`
* `peer-focus:`

---

## 11. Group Hover

`group-hover` allows child elements to react when a parent is hovered.

```html
<div class="group p-4 border">
  <p class="group-hover:text-blue-600">Hover parent</p>
</div>
```

---

## 12. Responsive Hover Best Practices

* Avoid relying only on hover for critical actions (touch devices)
* Combine hover with focus for accessibility
* Keep hover effects subtle and consistent

---

## 13. Common Mistakes

* Assuming `md:` applies only at exactly `768px`
* Forgetting mobile-first order
* Overusing hover effects on mobile-first layouts

---

## 14. Mental Model

Think of Tailwind variants as **prefix modifiers**:

```text
[breakpoint]:[state]:[utility]
```

Examples:

```text
md:hover:text-blue-600
lg:focus:bg-gray-100
```

---

## Further Reading

* [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)
* [https://tailwindcss.com/docs/hover-focus-and-other-states](https://tailwindcss.com/docs/hover-focus-and-other-states)
* [https://developer.mozilla.org/en-US/docs/Web/CSS/@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

> 📚 This is part of the Tailwinds chapter.
