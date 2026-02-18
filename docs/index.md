# My Blog notes
## after coding static HTML layout
1. create .eleveny.js config file in root following steps in docs(addPassthroughCopy, setInputDirectory)
2. create n\_includes folder in src folder
3. add base.njk file in that folder with html template
4. add {{ title }} in title tags, and add {{ content | safe }} in body tags
 {{title}} => variable from front matter meta data, {{content | safe }} renders content after front matter '---'
5. modify root index.html file => index.njk, delete all accept inner body contents, delete body tags
  ex:<header></header><main></main> 
  add front matter at very top as so for sanity check/test build(no quotes):
  '---
    title: test!
    layout: 'base.njk'
    ---'
6. re-add link tag stylesheet to base.njk
7. create header component by cutting it from index.njk
  create file in n\_includes folder > header.njk
  past header data in that
## Looping through all my blog post
8. create a blog folder that holds all my markdown blog post files, such as '2026-2-12-blog-post.md':
```
---
title: My first blog post
author: Daniel Torres
date: 2026-02-12
tags: post
---

lorum impsum text..
```
9. The index page where all muy post will show, convert index.html => index.njk
Add front matter vars needed such as title, and add base layout, and loop functions {%- for post in collections.post -%}
for loops (tags: post) in collections.post (post tags are a collection)
img and title tags etc that's in each post can be looped by ex: {{ post.data.image}}
post is the tag name, data is the data you are getting, name of what you are trying to grab, such as title, author, date, etc
```
---
title: My blog title
layout: 'base.njk'
---

  <main>
    <h1 class="blog-title">Blog</h1> etc..

    <section>
      {%- for post in collections.post | reverse -%}
        <article class="article-top-margin">
          <figure>
            <img src="{{ post.data.image}}" alt="{{ post.data.imageAlt }}" class="blog-image">
            <figcaption>{{ post.data.date }} - 2 minute read</figcaption>
            <h1 class="blog-post-title">{{ post.data.title }}</h1>
          </figure>
        </article>
      {%- endfor -%}
    </section>
  </main>
```
### fix date in post to only show what you typed instead of time and zone etc.
In the .eleventy.js config file add code on top and code in module:
```
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  etc ...
  //This is a filter method, need to add postDate filter in html/njk ex: {{ post.data.date | postDate }}
    eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
}
```

In the```_includes``` folder, create article.njk
Copy post.njk contents in there or just move to the folder with new name

### fix ```{{ content | safe }}``` in a paragraph tag not accepting css class.
since content creates a new p tag with text it gets from markdown and inserts it to article file, I needed to remove p tag and wrap in div
tag with the css class, such as below.

article.njk ex:
```
---
layout: 'base.njk'
---

<figure>
  <img src="{{ image }}" alt="{{ imageAlt }}" class="blog-image">
  <figcaption>{{ imageAlt }}</figcaption>
</figure>
<article>
  <h1 class="blog-post-title">{{ title }}</h1>
  <p class="post-date">{{ date | postDate }} - 2 min read</p>
  <div class="blog-post-content">
    {{ content | safe }}
  </div>
  
  <div class="tag-container">
    <a href="" class="tag">HTML5</a>
    <a href="" class="tag">CSS3</a>
    <a href="" class="tag">JavaScript</a>
    <a href="" class="tag">NodeJS</a>
  </div>
</article>

```
### Create reusable snippets
From index.njk file, grab reusable snippet such as the aricle tag in this for loop:
```
<section>
      {%- for post in collections.post | reverse -%}
      {# copy start #}
        <article class="article-top-margin">
          <a href="{{ post.url }}" target="_blank">
            <figure>
              <img src="{{ post.data.image}}" alt="{{ post.data.imageAlt }}" class="blog-image">
              <figcaption>{{ post.data.date | postDate }} - 2 minute read</figcaption>
              <h1 class="blog-post-title">{{ post.data.title }}</h1>
            </figure>
          </a>
        </article>
        {# copy end #}
      {%- endfor -%}
    </section>
```
Create new article-snippet.njk file in ```_includes folder ``` and past snippet.
And then add snippet back to index.njk as so:
```
<section>
      {%- for post in collections.post | reverse -%}
        {% include 'article-snippet.njk' %}
      {%- endfor -%}
    </section>
```
Test*


---
# Markdown Cheatsheet

# H1
## H2
### H3
*Italic*

**Bold**

[Markdown Link](https://commonmark.org/help/) 

![Image](http://url/a.png)  

> Blockquote
1. One
2. Two
3. Three
* List
* List
* List
Horizontal rule:

---
`Inline code` with backticks  

```
let ingredientList = ingredient.map(item => {
  return [item.body]
})
```

this is `important` text. and percentage signs : % and `%`
