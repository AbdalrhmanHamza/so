---
description: 15 Parallax effects in HTML, CSS, and JavaScript. Collection of hand-picked parallax effects made with HTML, CSS, and JavaScript hand-picked from codepen.io and YouTube and other resources.
keywords: HTML, CSS, JavaScript, Web Development, Frontend Development, Web Design, Solutions Blog, solutions blog
public: true
layout: ../../layouts/BlogPost.astro
title: 15 Parallax Effects in HTML, CSS, and JavaScript
createdAtmeta: Tue, 24 Jan 2023 14:07:29 GMT
createdAt: Mon, 30 Jan 2023 11:53:35 GMT
updatedAt: Mon, 30 Jan 2023 11:53:35 GMT
tags:
  - HTML
  - CSS
  - JavaScript
  - Frontend Development
heroImage: /posts/hero-images/hero-image-15-parallax-effects.png
slug: 15-paralex-effects-in-html-and-css-and-javascript
---

</br>

Hi, in this post I will show you amazing parallax effects made in HTML, CSS and JavaScript. In this post You will find the **demo** and **source code** for every parallax effect and **Download Buttons** to download all files for every effect.

> **Note**: This effects is hand-picked from **YouTube** and **CodePen.io** and **GitHub** and other resources. I provided the source code and demo for every effect.

---

</br>

## <center> Related posts </center>

1- <a href="/posts/24-css-text-effects" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">24 CSS Text Effects</a>

2- <a href="/posts/22-css-text-animation" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">22 awesome CSS text animation</a>

3- <a href="/posts/awesome-19-custom-404-page" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">19 awasome custom 404 page in HTML and CSS.</a> </br>

</br>

---

</br>

### Before start, follow the given steps:

1. create `index.html` file for HTML Structure.
2. create `style.css` file for CSS Styles.
3. create `script.js` file for JavaScript Code.

</br>

---

</br>

## 1. First Parallax Effect

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/first-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

original tutorial on youtube <a href="https://www.youtube.com/watch?v=Nt70Ld0dJCM&t=21s" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank" aria-describedby="tutorial on youtube" aria-label="tutorial on youtube">**Here**</a>.

Source code for this effect:

first html code

`index.html`

```html
<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>Ed's love dungeon</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Oswald:700|Poppins"
      rel="stylesheet"
    />
  </head>

  <body>
    <section>
      <nav>
        <h4>developedbyed</h4>
        <a class="button">Sign Up</a>
      </nav>
      <div class="container">
        <h2 class="main-title">Explore.</h2>
        <img src="./bg1.png" class="bg1" alt="" />
        <img src="./girl1.png" class="girl" alt="" />
        <img src="./rock1.png" class="rock" alt="" />
      </div>
      <div class="content">
        <div class="content-images">
          <div>
            <img src="./switzleft.png" alt="" />
            <h4>Switzerland</h4>
            <h3>Mountains of tibidabo</h3>
          </div>
          <div>
            <img src="./switzright.png" alt="" />
            <h4>Switzerland</h4>
            <h3>Mountains of tibidabo</h3>
          </div>
        </div>
        <p class="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
          consequuntur a nisi, illo quia cupiditate fuga et eos minima
          voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
          quae.
        </p>
        <p class="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere neque
          consequuntur a nisi, illo quia cupiditate fuga et eos minima
          voluptatum cum dolorum quas repellat eaque beatae vitae veritatis
          quae.
        </p>
      </div>
    </section>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"
      integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ=="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
nav {
  position: absolute;
  width: 100%;
  display: flex;
  padding: 3rem 10rem;
  justify-content: space-between;
}

.container {
  height: 100vh;
}
.container img {
  width: 100%;
  position: absolute;
  height: 110vh;
  object-fit: cover;
  z-index: -1;
}
.main-title {
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 6rem;
  transform: translate(-50%, -30%);
}

.content {
  width: 100%;
  background: rgb(24, 24, 24);
  min-height: 100vh;
  z-index: 2;
  position: absolute;
}
.content-images {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;
  text-align: center;
}

.text {
  padding: 2rem 20rem;
  font-size: 1.1rem;
}
```

</br>

Javascript Code

`script.js`

```javascript
let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()

timeline
  .to('.rock', 10, { y: -300 })
  .to('.girl', 10, { y: -200 }, '-=10')
  .fromTo('.bg1', { y: -50 }, { y: 0, duration: 10 }, '-=10')
  .to('.content', 10, { top: '0%' }, '-=10')
  .fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo('.text', { opacity: 0 }, { opacity: 1, duration: 3 })

let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: '300%',
  triggerHook: 0
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller)
```

</br>

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/15-parallax-effects/1.parallax-effect/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/1-parallax.zip" download>
        <span class="dark:bg-pink-900">Download (2.36 mb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 2. Second Parallax Effect

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/2-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

original tutorial on youtube <a href="https://www.youtube.com/watch?v=1wfeqDyMUx4" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank" aria-describedby="tutorial on youtube" aria-label="tutorial on youtube">Here</a>.

Source code for this effect:

first html code

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>parallax effect | Solutions Blog</title>
  </head>
  <body>
    <header>
      <a href="#" class="logo">Logo</a>
      <ul>
        <li><a href="#" class="active">Home</a></div>
        <li><a href="#">About</a></div>
        <li><a href="#">Work</a></div>
        <li><a href="#">Contact</a></div>
      </ul>
    </header>
    <section>
      <img src="stars.png" id="stars" />
      <img src="moon.png" id="moon" />
      <img src="mountains_behind.png" id="mountains_behind" />
      <h2 id="text">Moon Light</h2>
      <a href="#sec" id="btn">Explore</a>
      <img src="mountains_front.png" id="mountains_front" />
    </section>
    <div class="sec" id="sec">
      <h2>Parallax Scrolling Effects</h2>
      <p>
        vitae nesciunt consectetur amet, ullam nulla voluptatibus in. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Nam quas cumqantium
        ipsum fugit consequatur reiciendis, enim officiis, dignissimos itaque
        dolorum facere vitae nesciunt consectetur amet, ullam nulla voluptatibus
        in. ipsum, dolor sit amet consectetur adipisicing elit. Nam quas cumque
        laudantium consequatur reiciendis, enim officiis, dignissimos itaque
        dolorum facere vitae nesciunt consectetur amet, ullam nulla voluptatibus
        in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.<br />
        <br />vitae nesciunt consectetur amet, ullam nulla voluptatibus in.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quas
        cumqantium ipsum fugit consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. ipsum, dolor sit amet consectetur adipisicing
        elit. Nam quas cumque laudantium consequatur reiciendis, enim officiis,
        dignissimos itaque dolorum facere vitae nesciunt consectetur amet, ullam
        nulla voluptatibus in. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nam quas cumqantium ipsum fugit consequatur
        reiciendis, enim officiis, dignissimos itaque dolorum facere vitae
        nesciunt consectetur amet, ullam nulla voluptatibus in.
      </p>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

</br>

CSS Styles

`style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:300,400,500,600,700,800,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  background: linear-gradient(#2b1055, #7597de);
  overflow-x: hidden;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
header .logo {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}
header ul li a:hover,
header ul li a.active {
  background: #fff;
  color: #2b1055;
}
section {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
section::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 100;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#moon {
  mix-blend-mode: screen;
}
section img#mountains_front {
  z-index: 10;
}
#text {
  position: absolute;
  right: -350px;
  color: #fff;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 9;
}
#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  border-radius: 40px;
  background: #fff;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 9;
  transform: translateY(100px);
}
.sec {
  position: relative;
  padding: 100px;
  background: #1c0522;
}
.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}
.sec p {
  font-size: 1em;
  color: #fff;
}
```

</br>

JavaScript Code

`script.js`

```javascript
let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  mountains_behind.style.top = value * 0.5 + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 4 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  btn.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})
```

</br>
</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/15-parallax-effects/2.parallax-effect/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/2.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (866 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 3. Parallax scroll animation

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/3-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Made by **isladjan**, CreatedAt ( June 27, 2020 )

</br>

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/isladjan/pen/abdyPBw" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/3.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (31.3 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 4. Scroll Trigger SVG Text Mask

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/4-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Made by **Tom Miller**, CreatedAt ( **June 3, 2020** ) .
</br>
</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/creativeocean/pen/qBbBLyB" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>
</br>

</center>

</br>

---

</br>

## 5. Disney Wall Parallax

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/5-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS (SCSS)**

Created by **Fernando Cohen**, CreatedAt **August 23, 2022** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/designfenix/pen/xxWeEQV" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/5.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (5.96 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 6. Parallax scene

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/6-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS (SCSS) / JS (Babel)**

Created by **Tobias Reich**, CreatedAt **NOVEMBER 17, 2016** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/electerious/pen/gLLozQ" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/6.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (2.85 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 7. Slider transitions

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/7-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Created by **Mirko Zorić**, CreatedAt **June 10, 2017**.

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/fluxus/pen/rweVgp" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/7.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (7.09 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 8. Slider Parallax Effect

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/8-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Created by **Manuel Madeira**, CreatedAt **June 28, 2016** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/mmadeira/pen/jrBxpE" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/8.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (5.37 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 9. Canvas Parallax Mountains

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/9-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS (CoffeeScript)**

Created by **Jack Rugile**, CreatedAt **January 28, 2013** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/jackrugile/pen/DrOZoY" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/9-parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (4.57 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 10. Parallax Slideshow

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/10-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS (SCSS) / JS (Babel)**

Created by **Bruno Carvalho**, CreatedAt **December 4, 2017** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/bcarvalho/pen/WXmwBq" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/10.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (14.5 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 11. Firewatch Launch Site

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/11-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS (SCSS) / JS**

Created by **Stephen Koller**, CreatedAt **MARCH 26, 2017** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/StephenKoller/pen/LWBLNW" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/11.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (3.69 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 12. Animated Continuous Sections with GSAP Observer

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/12-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS (SCSS) / JS**

Created by **GreenSock**, CreatedAt **February 9, 2022** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/GreenSock/pen/XWzRraJ" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 13. Mouse Move Parallax

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/13-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Created by **oscicen**, CreatedAt **January 10, 2019** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/oscicen/pen/zyJeJw" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/13.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (2.46 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 14. Portfolio parallax page

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/14-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS / JS**

Created by **Ivan Grozdic**, CreatedAt **January 20, 2019** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/ig_design/pen/GPVXVx" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/14.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (5.78 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

## 15. Parallax Tilt Effect Cards

</br>

<div class="video-container">

<video src="/posts/videos/15-prallax-effects/15-parallax-effect.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

</br>

Made with: **Html / CSS/ JS**

Created by **Abubaker Saeed**, CreatedAt **November 6, 2019** .

</br>

<center>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="https://codepen.io/AbubakerSaeed/pen/rNNdvqz" target="_blank">
        <span class="dark:bg-pink-900">Demo & Code</span>
    </a>
    </button>
</div>

<div class="content__item" style="display: inline; padding: 10px;">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/assets/zip-files/15-parallax-effects/15.parallax-effect.zip" download>
        <span class="dark:bg-pink-900">Download (3.91 kb)</span>
    </a>
    </button>
</div>

</center>

</br>

---

</br>

> If you have any questions or suggestions, feel free to leave a comment below.

</br>

## <center> thanks for reading. </center>

</br>
