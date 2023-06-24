---
description: Have you ever come across a draggable slider on websites like YouTube and wondered how to implement it on your own website? **Look no further!** In this tutorial, we will walk you through the process of creating a draggable slider using HTML, CSS, and JavaScript.
keywords: frontend development, HTML, CSS, JavaScript,Tutorial, Draggable Slider
draft: false
layout: ../../layouts/BlogPost.astro
title: How To Create Draggable Slider In HTML, CSS and JavaScript 🔥💯
createdAt: Tue, 10 Jan 2023 16:52:07 GMT
updatedAt: Sat, 24 Jun 2023 15:52:27 GMT
tags:
  - HTML
  - CSS
  - JavaScript
  - Tutorials
  - Frontend Development
heroImage: /posts/hero-images/draggable-slider.png
slug: how-to-create-draggable-slider-in-html-css-and-javascript
---

</br>

Have you ever come across a draggable slider on websites like YouTube and wondered how to implement it on your own website? **Look no further!** In this tutorial, we will walk you through the process of creating a draggable slider using HTML, CSS, and JavaScript.

The draggable slider allows users to slide through different components by either dragging them with the mouse or using the previous and next buttons positioned on the left and right sides of the slider.

To begin, we will use HTML to structure the basic elements of our slider. This will include a container element to hold the slider tabs and the previous and next buttons. Inside the container, we will create individual tabs as separate elements.

Here's the **HTML** code structure for our draggable slider: ⬇

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Draggable slider tab || Frontend Solutions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- FontAwesome CDN Link -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    />
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

Next, we will apply CSS styles to enhance the appearance of our slider. We can customize the appearance of the tabs, buttons, and container to match the design requirements of your website. CSS will allow us to create a visually appealing and **user-friendly slider.**

Here’s the **CSS** code structure for our draggable slider: ⬇

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

**Now comes the exciting part:** implementing the functionality of the draggable slider using JavaScript. We will use JavaScript to enable the **dragging feature,** allowing users to slide the tabs to the right or left. By capturing the mouse events and calculating the position of the tabs, we can create a smooth and interactive sliding experience.

To further enhance the user experience, we will also add event listeners to the previous and next buttons. These listeners will trigger the sliding animation when the buttons are clicked, providing an alternative navigation method for users.

Here’s the **JavaScript** code: ⬇

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

**If you're eager to see the end result in action,** you can check out a **live demo** of this slider by following the link provided.

<div class="content__item">
    <button class="button button--pandora dark:bg-pink-800">
      <a href="/posts/demos/draggable-tabs-slider/demo" target="_blank">
        <span class="dark:bg-pink-900">Live Demo</span>
      </a>
    </button>
</div>

</br>

By following this tutorial, you will have all the knowledge necessary to create your own draggable slider using HTML, CSS, and JavaScript. With some creativity and customization, you can integrate this slider into your website, providing a dynamic and engaging user experience.

**Congratulations** 🎉🎉, you have successfully created the draggable slider ✨🎉🎉✨

<!-- conclusion -->

</br>

---

</br>

## <center> Thanks for reading. </center>

</br>
