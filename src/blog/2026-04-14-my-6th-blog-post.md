---
title: ReactJS information for beginners
author: Daniel Torres
date: 2026-04-14T16:40:00.000-08:00
tags:
  - react
image: /images/bannerReact1600x618.png
imageAlt: Yellow image that says ReactJS
---

> ### Hi, Welcome to my blog!👋
> My name is Daniel, and this is my journey to blogging about **Web Development**, **Hardware**, and **tech related** things.
> Ultimately, this will be a place to help me remember things, in the form of documentations and ramblings.

(*React is a front-end JavaScript library created by Facebook that is very popular to this day in the year of our lord 2026.*)

### Things to know:

- React works better with **declarative functions**(ex: map functions)
- **Propeties** = props => makes components more reusable ♻️
- 👶Siblings cannot pass props, they must get from the parent 🧑‍🍼
- keep state as local as you can
  - if only one child needs props, keep it locally there
- React uses JSX,{} converts to JS-Land
  - JSX returns JS object
- Parenthesis() after return help you indent JSX item

```
let ingredientList = ingredient.map(item => {
  return [item.body]
})
```
