---
description: 10 CSS Buttons Styles With Source Code. here is 10 awesome CSS Buttons styles Made with HTMl and CSS. in this post you will find the source code and the demo for every button and one demo for all 10 buttons in one page.
keywords: CSS, Styles, Html, css hover button, CSS and HTML animation, Awesome, hover Buttons animation, Solutions Blog
public: true
layout: ../../layouts/BlogPost.astro
title: 10 CSS Buttons Styles With Source Code.
createdAt: Thu, 12 Jan 2023 12:37:15 GMT
updatedAt: Thu, 12 Jan 2023 12:37:15 GMT
tags:
  - HTML
  - CSS
  - Frontend Development
heroImage: /posts/hero-images/heroimage-21-css-hover-buttons-styles.png
slug: 10-css-buttons-styles
---

</br>

Hi, In this post i will show you awesoem 10 CSS Hover Buttons styles with source code and demo for every button. in the end of this post you will find demo for all buttons in one page. this buttons you can use it in you website. you just need to copy and paste the code for any button you need.

</br>

---

</br>

## <center> Related posts </center>

1- <a href="/posts/24-css-text-effects" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">24 CSS Text Effects.</a>

2- <a href="/posts/22-css-text-animation" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">22 awesome CSS text animation.</a>

3- <a href="/posts/awesome-19-custom-404-page" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">19 awasome custom 404 page in HTML and CSS.</a> </br>

4- <a href="/posts/29-css-3d-text-effects" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">29 awesome CSS 3d text effects.</a> </br>

</br>

---

</br>

### Before start, follow the given steps:

1. create `index.html` file for HTML Structure.
2. create `style.css` file for CSS Styles.

---

</br>

## 1. Upload Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/1-upload-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>Upload button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--pan">
          <span class="dark:bg-pink-900">Upload</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}

.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
  /* content: counters(itemcounter, ".", decimal-leading-zero); */
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--pan {
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 700;
  border: 2px solid #000;
  border-radius: 3rem;
  overflow: hidden;
  color: #fff;
}

.button--pan span {
  position: relative;
  mix-blend-mode: difference;
}

.button--pan::before {
  content: '';
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pan:hover::before {
  transform: translate3d(0, -100%, 0);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/1-upload-buttons/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 2. New Page Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/2-new-page-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>New page button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--hyperion">
          <span class="dark:bg-pink-900">New page</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}

.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}
.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
  /* content: counters(itemcounter, ".", decimal-leading-zero); */
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--hyperion {
  font-family: input-mono-narrow, monospace;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border: 1px solid #000;
  overflow: hidden;
  color: #fff;
}

.button--hyperion span {
  display: block;
  position: relative;
}

.button--hyperion > span {
  overflow: hidden;
}

.button--hyperion > span > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.button--hyperion:hover > span > span {
  animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}
@keyframes MoveUpInitial {
  to {
    transform: translate3d(0, -105%, 0);
  }
}

@keyframes MoveUpEnd {
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.button--hyperion::before {
  content: '';
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  transform-origin: 100% 50%;
}

.button--hyperion:hover::before {
  transform: scale3d(0, 1, 1);
  transform-origin: 0% 50%;
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/2-new-page-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 3. Render Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/3-render-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>New page button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--mimas">
          <span class="dark:bg-pink-900">Render</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}

.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
  /* content: counters(itemcounter, ".", decimal-leading-zero); */
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--mimas {
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 0.5rem;
  overflow: hidden;
  color: #fff;
  background: #e7e7e7;
  font-family: aktiv-grotesk-extended, sans-serif;
}

.button--mimas span {
  position: relative;
  mix-blend-mode: difference;
}

.button--mimas::before {
  content: '';
  background: #000;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

.button--mimas:hover::before {
  transform: translate3d(100%, 0, 0);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/3-render-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 4. Subscribe Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/4-subscribe-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>New page button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--atlas">
          <span class="dark:bg-pink-900">Subscribe</span>
          <div class="marquee" aria-hidden="true">
            <div class="marquee__inner">
              <span class="dark:bg-pink-900">Subscribe</span>
              <span class="dark:bg-pink-900">Subscribe</span>
              <span class="dark:bg-pink-900">Subscribe</span>
              <span class="dark:bg-pink-900">Subscribe</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
  /* content: counters(itemcounter, ".", decimal-leading-zero); */
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--atlas {
  font-family: signo, sans-serif;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Open Sans', sans-serif;
}

.button--atlas > span {
  display: inline-block;
}

.button--atlas:hover > span {
  opacity: 0;
}
.button--atlas:hover .marquee__inner {
  animation-play-state: running;
  opacity: 1;
  transition-duration: 0.4s;
}
.marquee {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  --offset: 1rem;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 1s linear infinite;
  animation-play-state: paused;
  opacity: 0;
}

.button--atlas:hover .marquee__inner {
  animation-play-state: running;
  opacity: 1;
  transition-duration: 0.4s;
}

.marquee span {
  text-align: center;
  white-space: nowrap;
  font-style: italic;
  padding: 1.5rem 0.5rem;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/4-subscribe-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 5. Send Love Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/5-send-love-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>Send love buttons || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--kari">
          <span class="dark:bg-pink-900">Send Love</span>
          <div class="marquee" aria-hidden="true">
            <div class="marquee__inner">
              <span class="dark:bg-pink-900">Send Love</span>
              <span class="dark:bg-pink-900">Send Love</span>
              <span class="dark:bg-pink-900">Send Love</span>
              <span class="dark:bg-pink-900">Send Love </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@600&display=swap');

.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--kari {
  font-family: serif;
  font-weight: 900;
  font-size: 1.25rem;
  border-radius: 50%;
  border: 2px solid #000;
}

.button--kari > span {
  display: inline-block;
  transition: opacity 0.1s;
}

.button--kari:hover > span {
  opacity: 0;
}

.button--kari .marquee {
  transform: rotate(-2.75deg);
}

.button--kari:hover .marquee__inner {
  animation-play-state: running;
  opacity: 1;
  transition-duration: 0.6s;
}
.marquee {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  --offset: 1rem;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 1s linear infinite;
  animation-play-state: paused;
  opacity: 0;
}

.button--atlas:hover .marquee__inner {
  animation-play-state: running;
  opacity: 1;
  transition-duration: 0.4s;
}

.marquee span {
  text-align: center;
  white-space: nowrap;
  font-style: italic;
  padding: 1.5rem 0.5rem;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/5-send-love-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 6. Activate Card Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/6-activate-card-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>Activate card button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--pandora dark:bg-pink-800">
          <span class="dark:bg-pink-900">Activate Card</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--pandora {
  background: #000;
  font-weight: 700;
  padding: 0;
  border-radius: 5px;
}

.button--pandora span {
  display: block;
  background: #a7a7a7;
  color: #000;
  padding: 1.5rem 2rem;
  border: 1px solid #000;
  border-radius: 5px;
  transform: translate3d(-4px, -4px, 0);
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pandora:hover span {
  transform: translate3d(-8px, -8px, 0);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/6-activate-card-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 7. Reshape Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/7-reshape-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <title>Reshape button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--janus">
          <span class="dark:bg-pink-900">Reshape</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--janus {
  font-family: freight-display-pro, serif;
  font-weight: 900;
  width: 175px;
  height: 120px;
  color: #fff;
  background: none;
}

.button--janus::before {
  content: '';
  background: #e6e6e6;
  -webkit-clip-path: path(
    'M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z'
  );
  clip-path: path(
    'M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z'
  );
  transition: clip-path 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55), -webkit-clip-path
      0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55), background 0.5s ease;
}

.button--janus:hover::before {
  background: #000;
  -webkit-clip-path: path(
    'M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z'
  );
  clip-path: path(
    'M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z'
  );
}

.button--janus::after {
  content: '';
  height: 86%;
  width: 97%;
  top: 5%;
  border-radius: 58% 42% 55% 45% / 56% 45% 55% 44%;
  border: 1px solid #000;
  transform: rotate(-20deg);
  z-index: -1;
  transition: transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55);
}

.button--janus:hover::after {
  transform: translate3d(0, -5px, 0);
}

.button--janus span {
  display: block;
  transition: transform 0.3s ease;
  mix-blend-mode: difference;
}

.button--janus:hover span {
  transform: translate3d(0, -10px, 0);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/7-reshape-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 8. Initialize Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/8-initialize-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

first html code

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://use.typekit.net/rnz2bks.css" />

    <link rel="stylesheet" href="style.css" />
    <title>Initialize</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--anthe">
          <span class="dark:bg-pink-900">Initialize</span>
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--anthe {
  font-family: bely-display, sans-serif;
  font-size: 23px;
  color: #fff;
  background: none;
}

.button--anthe::before {
  content: '';
  background: #000;
  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
  transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1), -webkit-clip-path
      0.4s cubic-bezier(0.2, 1, 0.8, 1);
}

.button--anthe:hover::before {
  background: #000;
  -webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.button--anthe span {
  display: block;
  mix-blend-mode: difference;
  transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
}

.button--anthe:hover span {
  transform: translate3d(-10px, 0, 0);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/8- initialize-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 9. Hide Details Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/9-hide-details-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <link rel="stylesheet" href="https://use.typekit.net/rnz2bks.css" />
    <title>Hide Details Button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--pallene">Hide Details</button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--pallene {
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 2px solid #000;
  box-shadow: inset 0 0 0 0px #000;
  transition: border-radius 0.3s, box-shadow 0.3s, color 0.3s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pallene:hover {
  color: #e7e7e7;
  border-radius: 50%;
  box-shadow: inset 0 0 0 40px #000;
  transition-delay: 0s, 0s, 0.2s;
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/9-hide-details-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

## 10. Verify Button

</br>

<div class="video-container">

<video src="/posts/videos/10-css-buttons-styles/10-verify-button.mp4" loading="lazy" muted loop="" preload="metadata" ></video>

<div class="video-text"> Hover to play </div>
</div>

Source code for this button:

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
    <link rel="stylesheet" href="https://use.typekit.net/rnz2bks.css" />
    <title>Verify Button || Solutions Blog</title>
  </head>
  <body>
    <div class="center">
      <div class="content__item">
        <button class="button button--telesto">
          <span class="dark:bg-pink-900"
            ><span class="dark:bg-pink-900">Verify</span></span
          >
        </button>
      </div>
    </div>
  </body>
</html>
```

</br>

CSS Styles:

`style.css`

```css
.center {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}
body {
  font-family: tenon, sans-serif;
}
.content__item {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  counter-increment: itemcounter;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  pointer-events: none;
  list-style: none;
}

.content__item::before {
  color: var(--color-number);
  position: absolute;
  top: 0;
  left: 0;
}
.button {
  pointer-events: auto;
  cursor: pointer;
  background: #e7e7e7;
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
}

.button::before,
.button::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.button--telesto {
  overflow: hidden;
  font-family: obvia, sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 1.15rem;
  color: #fff;
}

.button--telesto span {
  display: block;
  position: relative;
  z-index: 1;
}

.button--telesto > span {
  overflow: hidden;
  mix-blend-mode: difference;
}

.button--telesto:hover > span > span {
  animation: MoveRightInitial 0.1s forwards, MoveRightEnd 0.3s forwards 0.2s;
}

@keyframes MoveRightInitial {
  to {
    transform: translate3d(105%, 0, 0);
  }
}

@keyframes MoveRightEnd {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.button--telesto::before,
.button--telesto::after {
  content: '';
  background: #000;
}

.button--telesto::before {
  width: 135%;
  -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
  transform: translate3d(-100%, 0, 0);
}

.button--telesto:hover::before {
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--telesto::after {
  width: 105%;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--telesto:hover::after {
  transform: translate3d(0, 0, 0);
  transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}
```

</br>

See the demo of this button

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/10-verifty-button/demo" target="_blank">
        <span class="dark:bg-pink-900">Demo</span>
    </a>
    </button>
</div>

</br>

---

</br>

you can see all 10 demos in one page from here:

</br>

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
    <a href="/posts/demos/10-css-hover-buttons/all-demos/demo" target="_blank">
        <span class="dark:bg-pink-900">All Demos</span>
    </a>
    </button>
</div>

</br>

> If you have any questions or suggestions, feel free to leave a comment below.

</br>

## <center> thanks for reading. </center>

</br>
