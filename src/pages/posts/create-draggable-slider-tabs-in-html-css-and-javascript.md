---
description: Create Draggable Slider Tabs In HTML, CSS and JavaScript. You may have seen the draggable slider on several websites like YouTube. If you were asking how can I make this slider on my website, here I will show you how to make this slider using HTML and CSS, and JavaScript.
keywords: frontend development, HTML, CSS, JavaScript,
public: true
layout: ../../layouts/BlogPost.astro
title: Create Draggable Slider Tabs In HTML, CSS and JavaScript.
createdAt: Tue, 10 Jan 2023 16:52:07 GMT
updatedAt: Tue, 10 Jan 2023 16:52:07 GMT
tags:
  - HTML
  - CSS
  - JavaScript
  - Frontend Development
heroImage: /posts/hero-images/heroimg-draggable-tabs-edit.png
slug: create-draggable-slider-tabs-in-html-css-and-javascript
---

</br>

You may have seen the draggable slider on several websites like YouTube. If you were asking how can I make this slider on my website, here I will show you how to make this slider using HTML and CSS, and JavaScript. In this post, I will show you how to make this draggable slider using HTML and CSS, and JavaScript. In this draggable slider, you can slide using drag the components using the mouse or using the previous and next buttons on right and left of the Slider.

In this post I will teach you how to make a draggable slider using HTML, CSS and JavaScript.

You can slide the tabs by dragging with the mouse to the right or left, or using previous and next buttons on the left and right of the Slider.
If you want to see the demo, You can see the demo of this slider from <a href="/posts/demos/draggable-tabs-slider/demo" class="underline underline-offset-2 hover:text-orange-500 decoration-orange-500" target="_blank">**This Link**</a>

## Before start, follow the given steps:

1. Create `index.html` file for **HTML** structure.
2. Create `style.css` file for **CSS** styles.
3. Create `script.js` file for **JavaScript** Code.

Let's start coding this slider now:

first, let's write HTML code:

`index.html`

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Draggable slider tab || Solutions Blog</title>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Fontawesome CDN Link -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="wrapper">
      <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
      <ul class="tabs-box">
        <li class="tab">Programming</li>
        <li class="tab active">HTML</li>
        <li class="tab">CSS</li>
        <li class="tab">Python</li>
        <li class="tab">Frontend Development</li>
        <li class="tab">Javascript</li>
        <li class="tab">C++</li>
        <li class="tab">C Language</li>
        <li class="tab">Java</li>
        <li class="tab">Coding</li>
        <li class="tab">PHP</li>
        <li class="tab">Study</li>
        <li class="tab">Computer Science</li>
        <li class="tab">Google</li>
        <li class="tab">AI</li>
      </ul>
      <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
    </div>
  </body>
</html>
```

</br>

Second, let's Create Styles using CSS paste the given styles below in `style.css` file.

```css
/* import poppins font from google fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #e3d5ca;
}
.wrapper {
  padding: 35px;
  position: relative;
  overflow-x: hidden;
  max-width: 1000px;
  background: #fffdf0;
  border-radius: 13px;
}
.wrapper .icon {
  position: absolute;
  top: 0;
  height: 100%;
  width: 120px;
  display: flex;
  align-items: center;
}
.icon:first-child {
  left: 0;
  display: none;
  background: linear-gradient(90deg, #fffdf0 70%, transparent);
}
.icon:last-child {
  right: 0;
  justify-content: flex-end;
  background: linear-gradient(-90deg, #fffdf0 70%, transparent);
}
.icon i {
  width: 55px;
  height: 55px;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: center;
  line-height: 55px;
  border-radius: 50%;
}
.icon i:hover {
  background: #efedfb;
}
.icon:first-child i {
  margin-left: 15px;
}
.icon:last-child i {
  margin-right: 15px;
}
.wrapper .tabs-box {
  display: flex;
  gap: 12px;
  list-style: none;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.tabs-box.dragging {
  scroll-behavior: auto;
  cursor: grab;
}
.tabs-box .tab {
  cursor: pointer;
  font-size: 1.18rem;
  white-space: nowrap;
  background: #f5f4fd;
  padding: 13px 20px;
  border-radius: 30px;
  border: 1px solid #d8d5f2;
}
.tabs-box .tab:hover {
  background: #efedfb;
}
.tabs-box.dragging .tab {
  user-select: none;
  pointer-events: none;
}
.tabs-box .tab.active {
  color: #fff;
  background: #e76f51;
  border-color: transparent;
}
```

</br>

Let's start creating JavaScript code. Paste the following code into `script.js` file.

```javascript
const tabsBox = document.querySelector('.tabs-box'),
  allTabs = tabsBox.querySelectorAll('.tab'),
  arrowIcons = document.querySelectorAll('.icon i')

let isDragging = false

const handleIcons = scrollVal => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex'
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex'
}

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    let scrollWidth = (tabsBox.scrollLeft += icon.id === 'left' ? -340 : 340)
    handleIcons(scrollWidth)
  })
})

allTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabsBox.querySelector('.active').classList.remove('active')
    tab.classList.add('active')
  })
})

const dragging = e => {
  if (!isDragging) return
  tabsBox.classList.add('dragging')
  tabsBox.scrollLeft -= e.movementX
  handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
  isDragging = false
  tabsBox.classList.remove('dragging')
}

tabsBox.addEventListener('mousedown', () => (isDragging = true))
tabsBox.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
```

</br>

Congratulations, you have successfully created the draggable tabs slider using HTML and CSS and JavaScript.

> If you have any questions or suggestions, feel free to leave a comment below.

<li class="content__item">
    <button class="button button--pandora">
      <a href="/posts/demos/draggable-tabs-slider/demo" target="_blank">
        <span>Demo</span>
      </a>
    </button>
</li>

<!-- conclusion -->
</br>

---

</br>

## <center> thanks for reading. </center>

</br>
