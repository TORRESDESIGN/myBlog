---
title: ReactJS information for beginners
author: Daniel Torres
date: 2026-04-28
tags:
  - react
image: /images/bannerReact1600x618.png
imageAlt: Yellow image that says ReactJS
---
> ### Hi, Welcome to my blog!👋
>
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
- No longer required after **React 17** to import `React` from the `'react'` module in every file that uses JSX
-
- Simple react Hello World example

> ex: **index.jsx**
>
> This is where we write up our markup(HTML) language in our JS file. React does the magic 🪄 of adding that to the root div in HTML file.
>
> ```
> import { createRoot } from "react-dom/client";
>
> const root = createRoot(document.getElementById("root"));
> root.render(<h1>Hello Yall!</h1>);
> ```
>
> index.jsx renders to root div in index.html
> **index.html**
>
> ```
> <html>
>    <head>
>        <link rel="stylesheet" href="/index.css">
>    </head>
>    <body>
>        <div id="root></div>
>        <script src="/index.jsx" type="module"></script>
>    </body>
> </html>
> ```
