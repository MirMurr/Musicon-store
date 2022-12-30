# CodeCademy - Musicon store project with handlebars.js
    
     Part of the design (layout) and images were provided by CodeCademy. I added media queries to the CSS so that it renders properly on mobile devices as           well. I added hamburger menu for navbar on smaller screen sizes.
    I applied handlebars.js to create reusable HTML templates.

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot


### Links

- Live Site URL: [https://mirmurr.github.io/Musicon-store/](https://mirmurr.github.io/Musicon-store/)

## My process

### Built with

- Semantic HTML5 markup
- Handlebars.js
- Mobile-first workflow
- Vanilla JS
- Flexbox

## What I learned

- using handlebars.js to create reusable HTML templates.

- lock scroll when mobile menu is active 

```js

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    document.body.classList.toggle('lock-scroll');
});

```
```css
.lock-scroll {
    overflow: hidden;
}

```

### Continued development

I am working on the following skills:

- Javascript skills (handlebars.js, functions)
- JS handlebars library
- Positioning elements - responsive mode
- Responsive design

### Useful resources

- [CodeCademy] (https://www.codecademy.com) - CodeCademy´s course "Build interactive websites with JavaScript" lessons. 
- [https://handlebarsjs.com] (https://handlebarsjs.com)

## Author

- [Andrea Hideg] https://github.com/MirMurr 


## Acknowledgments

- CodeCademy ((https://www.codecademy.com) - the part of the design (layout on desktop, images, font-family) was provided by CodeCademy. Build interactive websites with JavaScript course material was helpful to complete this project and learn to use handlebars JS library.

