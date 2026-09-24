---
title: React Component Card from props
author: Daniel Torres
date: 2026-09-11
tags:
  - react
image: /images/bannerReact1600x618.png
imageAlt: Banner that says ReactJS
---
### Creating a component card with props data:

Create a Joke component(Joke.jsx).

📂 react app
--📂 src
-- App.jsx
-- Jokes.jsx   <--- Just created
--📁 assets etc..

**Jokes.jsx**

```
function Joke(props) {
	return (
		<>
			<h2>{props.setup}</h2>
			<p>{props.punchline}</p>
		</>
	)
}

export default Joke;
```

Import component to App.jsx file
**App.jsx**
```
function App() {
  return(
    <>
      <img src={Logo} alt="react logo" className="logo" />
      <h1>DAD JOKES</h1>
      <Jokes 
        setup="Why can't a nose be 12 inches long?"
        punchline="Because then it would be a foot."
      />
      <Jokes 
        setup="How do you organize a party on Mars?"
        punchline="You planet."
      />
    </section>
  )
}
```
Props will now display Jokes on your page.
You can also destructure props, for ex:
```
...
const comedian = {
    name: "Mr. Funnyguy",
    setup: "The funiest joke setup",
    punchline: "The funiest punchline"
}

const {name, setup, punchline} = comedian
console.log(setup) <-- Will give you the Joke setup

```
Here's an example within a component:
**Jokes.jsx**

```
function Joke({setup, punchline}) {
	return (
		<>
			<h2>{setup}</h2>
			<p>{punchline}</p>
		</>
	)
}

export default Joke;
```
Now we don't need to use props in the code when we do this.


### Simple react Hello World example:

* No longer required after **React 17** to import React from the react module in every file that uses JSX
* Components and their files should use PascalCase(ex:UserProfile.js)


> ex: **index.jsx**
>
> This is where we write up our markup(HTML) language in our JS file. React does the magic 🪄 of adding that to the root div in HTML file.
>
> ```
>
> ```
