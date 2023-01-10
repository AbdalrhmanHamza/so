---
description: awesome Delete Button Animation using HTMl and CSS and Javascript.
keywords: HTML, CSS, JavaScript, FrontendDevelopment, Frontend.
public: true
layout: ../../layouts/BlogPost.astro
title: awesome Delete Button Animation using HTMl and CSS and Javascript.
createdAt: Mon, 09 Jan 2023 11:52:45 GMT
updatedAt: Mon, 09 Jan 2023 18:19:15 GMT
tags:
  - HTML
  - CSS
  - JavaScript
  - Frontend Development
heroImage: /posts/hero-images/heroimg-awesome-buttons-animation.png
slug: awesome-delete-button-animation
---

</br>

## <center> Related posts </center>

1- <a href="/posts/29-css-3d-text-effects" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">29 awesome CSS 3d text effects</a>

2- <a href="/posts/22-css-text-animation" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">22 awesome CSS text animation</a>

3- <a href="/posts/awesome-19-custom-404-page" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">19 awasome custom 404 page in HTML and CSS.</a>

4- <a href="/posts/24-css-text-effects" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">24 CSS Text Effects.</a>

</br>

---

</br>

in this post i will show you awesome delete button animation. Made with HTML, CSS and Javascript. this button will improve user experience on your website.

You can see the Demo from <a href="/posts/demos/delete-button/demo" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**Here**</a>

here is the Source Code :

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <title>Delete button | By Solutions Blog</title>
  </head>
  <body>
    <button class="button">
      <div class="trash">
        <div class="top">
          <div class="paper"></div>
        </div>
        <div class="box"></div>
        <div class="check">
          <svg viewBox="0 0 8 6">
            <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
          </svg>
        </div>
      </div>
      <span>Delete Item</span>
    </button>
    <script src="./script.js"></script>
  </body>
</html>
```

</br>

CSS Code

`style.css`

```css
.button {
  --background: #2b3044;
  --background-hover: #1e2235;
  --text: #fff;
  --shadow: rgba(0, 9, 61, 0.2);
  --paper: #5c86ff;
  --paper-lines: #fff;
  --trash: #e1e6f9;
  --trash-lines: #bbc1e1;
  --check: #fff;
  --check-background: #5c86ff;
  position: relative;
  border: none;
  outline: none;
  background: none;
  padding: 10px 24px;
  border-radius: 7px;
  min-width: 142px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  color: var(--text);
  background: var(--btn, var(--background));
  box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 8px) var(--shadow);
  transform: scale(var(--scale, 1));
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.button span {
  display: block;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  opacity: var(--span-opacity, 1);
  transform: translateX(var(--span-x, 0)) translateZ(0);
  transition: transform 0.4s ease var(--span-delay, 0.2s), opacity 0.3s ease var(--span-delay, 0.2s);
}
.button .trash {
  display: block;
  position: relative;
  left: -8px;
  transform: translate(var(--trash-x, 0), var(--trash-y, 1px)) translateZ(0)
    scale(var(--trash-scale, 0.64));
  transition: transform 0.5s;
}
.button .trash:before,
.button .trash:after {
  content: '';
  position: absolute;
  height: 8px;
  width: 2px;
  border-radius: 1px;
  background: var(--icon, var(--trash));
  bottom: 100%;
  transform-origin: 50% 6px;
  transform: translate(var(--x, 3px), 2px) scaleY(var(--sy, 0.7)) rotate(var(--r, 0deg));
  transition: transform 0.4s, background 0.3s;
}
.button .trash:before {
  left: 1px;
}
.button .trash:after {
  right: 1px;
  --x: -3px;
}
.button .trash .top {
  position: absolute;
  overflow: hidden;
  left: -4px;
  right: -4px;
  bottom: 100%;
  height: 40px;
  z-index: 1;
  transform: translateY(2px);
}
.button .trash .top:before,
.button .trash .top:after {
  content: '';
  position: absolute;
  border-radius: 1px;
  background: var(--icon, var(--trash));
  width: var(--w, 12px);
  height: var(--h, 2px);
  left: var(--l, 8px);
  bottom: var(--b, 5px);
  transition: background 0.3s, transform 0.4s;
}
.button .trash .top:after {
  --w: 28px;
  --h: 2px;
  --l: 0;
  --b: 0;
  transform: scaleX(var(--trash-line-scale, 1));
}
.button .trash .top .paper {
  width: 14px;
  height: 18px;
  background: var(--paper);
  left: 7px;
  bottom: 0;
  border-radius: 1px;
  position: absolute;
  transform: translateY(-16px);
  opacity: 0;
}
.button .trash .top .paper:before,
.button .trash .top .paper:after {
  content: '';
  width: var(--w, 10px);
  height: 2px;
  border-radius: 1px;
  position: absolute;
  left: 2px;
  top: var(--t, 2px);
  background: var(--paper-lines);
  transform: scaleY(0.7);
  box-shadow: 0 9px 0 var(--paper-lines);
}
.button .trash .top .paper:after {
  --t: 5px;
  --w: 7px;
}
.button .trash .box {
  width: 20px;
  height: 25px;
  border: 2px solid var(--icon, var(--trash));
  border-radius: 1px 1px 4px 4px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: border-color 0.3s;
}
.button .trash .box:before,
.button .trash .box:after {
  content: '';
  position: absolute;
  width: 4px;
  height: var(--h, 20px);
  top: 0;
  left: var(--l, 50%);
  background: var(--b, var(--trash-lines));
}
.button .trash .box:before {
  border-radius: 2px;
  margin-left: -2px;
  transform: translateX(-3px) scale(0.6);
  box-shadow: 10px 0 0 var(--trash-lines);
  opacity: var(--trash-lines-opacity, 1);
  transition: transform 0.4s, opacity 0.4s;
}
.button .trash .box:after {
  --h: 16px;
  --b: var(--paper);
  --l: 1px;
  transform: translate(-0.5px, -16px) scaleX(0.5);
  box-shadow: 7px 0 0 var(--paper), 14px 0 0 var(--paper), 21px 0 0 var(--paper);
}
.button .trash .check {
  padding: 4px 3px;
  border-radius: 50%;
  background: var(--check-background);
  position: absolute;
  left: 2px;
  top: 24px;
  opacity: var(--check-opacity, 0);
  transform: translateY(var(--check-y, 0)) scale(var(--check-scale, 0.2));
  transition: transform var(--check-duration, 0.2s) ease var(--check-delay, 0s),
    opacity var(--check-duration-opacity, 0.2s) ease var(--check-delay, 0s);
}
.button .trash .check svg {
  width: 8px;
  height: 6px;
  display: block;
  fill: none;
  stroke-width: 1.5;
  stroke-dasharray: 9px;
  stroke-dashoffset: var(--check-offset, 9px);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--check);
  transition: stroke-dashoffset 0.4s ease var(--checkmark-delay, 0.4s);
}
.button.delete {
  --span-opacity: 0;
  --span-x: 16px;
  --span-delay: 0s;
  --trash-x: 46px;
  --trash-y: 2px;
  --trash-scale: 1;
  --trash-lines-opacity: 0;
  --trash-line-scale: 0;
  --icon: #fff;
  --check-offset: 0;
  --check-opacity: 1;
  --check-scale: 1;
  --check-y: 16px;
  --check-delay: 1.7s;
  --checkmark-delay: 2.1s;
  --check-duration: 0.55s;
  --check-duration-opacity: 0.3s;
}
.button.delete .trash:before,
.button.delete .trash:after {
  --sy: 1;
  --x: 0;
}
.button.delete .trash:before {
  --r: 40deg;
}
.button.delete .trash:after {
  --r: -40deg;
}
.button.delete .trash .top .paper {
  -webkit-animation: paper 1.5s linear forwards 0.5s;
  animation: paper 1.5s linear forwards 0.5s;
}
.button.delete .trash .box:after {
  -webkit-animation: cut 1.5s linear forwards 0.5s;
  animation: cut 1.5s linear forwards 0.5s;
}
.button.delete,
.button:hover {
  --btn: var(--background-hover);
  --shadow-y: 5px;
  --shadow-blur: 9px;
}
.button:active {
  --shadow-y: 2px;
  --shadow-blur: 5px;
  --scale: 0.94;
}

@-webkit-keyframes paper {
  10%,
  100% {
    opacity: 1;
  }
  20% {
    transform: translateY(-16px);
  }
  40% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(24px);
  }
}

@keyframes paper {
  10%,
  100% {
    opacity: 1;
  }
  20% {
    transform: translateY(-16px);
  }
  40% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(24px);
  }
}
@-webkit-keyframes cut {
  0%,
  40% {
    transform: translate(-0.5px, -16px) scaleX(0.5);
  }
  100% {
    transform: translate(-0.5px, 24px) scaleX(0.5);
  }
}
@keyframes cut {
  0%,
  40% {
    transform: translate(-0.5px, -16px) scaleX(0.5);
  }
  100% {
    transform: translate(-0.5px, 24px) scaleX(0.5);
  }
}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  display: flex;
  font-family: 'Inter', Arial;
  justify-content: center;
  align-items: center;
  background: #eceffc;
}
```

Javascript Code

`script.js`

```javascript
document.querySelectorAll('.button').forEach(button =>
  button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
      button.classList.add('delete')
      setTimeout(() => button.classList.remove('delete'), 3200)
    }
    e.preventDefault()
  })
)
```

</br>

> If you have any questions or suggestions, feel free to leave a comment below.

<!-- </br>

tags: <a href="/categories/javascript" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**Javascript**</a> , <a href="/categories/html" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**HTML**</a> , <a href="/categories/css" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**CSS**</a> , <a href="/categories/frontend development" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**Frontend Development**</a> -->

<!-- conslusion -->

</br>

---

</br>

## <center> thanks for reading. </center>

</br>
