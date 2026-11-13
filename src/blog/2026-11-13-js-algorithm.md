---
title: JS Algorithm
author: Daniel Torres
date: 2026-11-13
tags:
  - post
  - javascript
image: /images/bannerRed1600x618.png
imageAlt: Red background that says JAVASCRIPT
---
**How to capitalize first letter in array.**
```
const names = ["alice", "bob", "charlie", "danielle"]

const capitalized = names.map(x => {
    const cap = x.charAt(0).toUpperCase()
    const uncapped = x.slice(1)
    return cap + uncapped;
    
})

console.log(capitalized)
```
