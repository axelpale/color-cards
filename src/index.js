// Rendering Parameters

require('./style.css')
const container = document.querySelector('#container')
const rgb = require('./rgb')

const colors = []

// Generate colors
for (let i = 128; i < 256; i += 8) {
  for (let j = 0; j <= i / 2; j += 8) {
    colors.push({
      r: j,
      g: j,
      b: i
    })
  }
}

// Generate cards
const cards = colors.map((color) => {
  return '<div class="color">' +
    '<div class="color-box" ' +
    'style="background-color: ' + rgb.css(color) + ';">' +
    '</div>' +
    '<div class="color-label">' +
    rgb.label(color) +
    '</div></div>'
})

const body = cards.join('\n')

container.innerHTML = body

const title = document.querySelector('h1')
const originalTitle = title.innerHTML
title.innerHTML = originalTitle + ' (' + cards.length + ')'
