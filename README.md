![Desktop](/design/desktop-preview.jpg)

## Overview

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Solution URL: [Add solution URL here](https://github.com/AhanafVai/Mastercraft-Bamboo-Monitor)
- Live Site URL: [Add live site URL here](https://tubular-sfogliatella-6e2351.netlify.app)

## My process

- Study the design.
- Give structure the website using semantic HTML.
- Design layout using Tailwind.
- Give dynamic functionality using Vanilla JS.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Tailwind css - CSS Framework
- Mobile-first workflow

### What I learned

This was a big challange for me both the desing and functionallity gave me some hard time.

To see how you can add code snippets, see below:

```html
<div>
  <button>Back this project</button>
  <figure>
    <img src="/images/icon-bookmark.svg" alt="bookmark" />
  </figure>
</div>
```

```css
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(
      --tw-ring-shadow,
      0 0 #0000
    ), var(--tw-shadow);
}
```

```js
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.add("overlay");
});
off.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  off.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
});
```

### Continued development

I am willing to add a dynamic functionality to the counter.

- More focus on js.

## Author

- Github - [Ahanaf](https://github.com/AhanafVai)

## Acknowledgments

I did this all by my self.
