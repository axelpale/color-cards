// Rendering Parameters

require('./style.css')
const container = document.querySelector('#container')
const rgb = require('./rgb')
const d3 = require('d3-color')

const colors = []

// Generate colors
for (let i = 0; i < 360; i += 6) {
  const c = d3.lch(75, 50, i)
  const rgb = c.rgb()
  colors.push({
    r: rgb.r,
    g: rgb.g,
    b: rgb.b
  })
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
