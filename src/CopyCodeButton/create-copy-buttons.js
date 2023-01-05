let blocks = document.querySelectorAll('pre')

blocks.forEach(blocks => {
  let button = document.createElement('copy-code-button')
  blocks.appendChild(button)
})
