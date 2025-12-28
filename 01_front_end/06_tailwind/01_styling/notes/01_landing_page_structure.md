# Website Page Structure (Header, Hero, Sections, CTA, Footer)

This document explains **why** a typical website (especially a landing page) is structured using `header`, `section`, and `footer`, not just **what they are**, but **their purpose and logic**.

---

## 1. `<header>` — Navigation & Identity

The `<header>` represents the **navigation and identity** of a website.

### Typical contents:

* Logo / brand name
* Navigation menu (Home, About, Contact)
* Login / Signup button

### Key characteristics:

* Usually **small in height**
* Appears on **every page**
* Not the main content

📌 **Important:**
`<header>` is **NOT** the hero section.

---

## 2. Hero Section — First Impression

The **hero section** is the **first main content area** users see when the page loads, without scrolling.

### Purpose:

* Answer in 3–5 seconds:

  * What is this website?
  * What does it offer?
  * What should I do next?

### Common contents:

* Large headline (H1)
* Short description
* Primary Call To Action (CTA)
* Image / illustration (optional)

### Why it is a `<section>`:

Because it represents **one clear topic with a specific goal**.

---

## 3. Why Use `<section>` Instead of `<div>`?

A `<section>` is used when content:

* Has a **logical topic**
* Can have its **own heading**
* Makes sense as a standalone part

Examples of good `<section>` usage:

* Hero section
* Features section
* Benefits section
* Testimonials
* CTA section

❌ Use `<div>` only for **layout or grouping**, not meaning.

---

## 4. Features / Benefits Section

This section explains **why the product or website is valuable**.

### Typical contents:

* Feature list
* Benefit cards
* Icons + short descriptions

### Purpose:

* Build trust
* Explain advantages
* Support the hero message

This section usually comes **after the hero**.

---

## 5. CTA Section — Call To Action

CTA stands for **Call To Action**.

### Purpose:

Encourage the user to **take a specific action**.

### Examples:

* Get Started
* Sign Up
* Try for Free

### Characteristics:

* Short text
* One clear button
* Often different background color

📌 CTA sections are often separated to keep **maximum focus**.

---

## 6. `<footer>` — Supporting Information

The `<footer>` is the **closing part** of the page.

### Common contents:

* Copyright
* Contact information
* Social media links
* Legal links

### Characteristics:

* Not main content
* Appears at the bottom
* Supports the page, not sells

---

## 7. Logical Flow of a Landing Page

```text
HEADER   → Navigation
HERO     → Core message
SECTION  → Explanation
SECTION  → Benefits
CTA      → Action
FOOTER   → Closing
```

This order follows **user psychology**, not random placement.

---

## Key Takeaways

* `<header>` = navigation
* Hero section = first main content
* `<section>` = one logical topic
* CTA should be focused and clear
* `<footer>` = closing & support

A well-structured page improves:

* Readability
* SEO
* Accessibility
* Team collaboration

---

This structure is commonly used in **modern web development** and works well with frameworks like **Tailwind CSS**.
