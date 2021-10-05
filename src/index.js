// Rendering Parameters

require('./style.css')
const container = document.querySelector('#container')
const d3 = require('d3-color')
const label = require('./label')

const colors = []
const closeness = (c, d) => {
  // Parameters
  //   c
  //     color
  //   d
  //     color
  //
  // Return
  //   distance
  //     number
  //
  const da = c.a - d.a
  const db = c.b - d.b
  const d2 = da * da + db * db
  return Math.sqrt(d2)
}

// Generate colors
for (let h = 218; h < 288; h += 6) {
  for (let l = 40; l <= 70; l += 10) {
    let c = 40
    const color = d3.lch(l, c, h)
    colors.push(color)
  }
}

// Generate cards
const cards = colors.map((color) => {
  const rgb = color.rgb()
  const displayable = color.displayable() ? 'displayable' : 'non-displayable'
  return '<div class="color ' + displayable + '">' +
    '<div class="color-box" ' +
    'style="background-color: ' + rgb.formatRgb() + ';">' +
    '</div>' +
    '<div class="color-label">' +
    label.rgb(rgb) +
    '</div>' +
    '<div class="color-label">' +
    label.hex(rgb) +
    '</div>' +
    '<div class="color-label">' +
    label.cielch(color) +
    '</div></div>'
})

const body = cards.join('\n')

container.innerHTML = body

const title = document.querySelector('h1')
const originalTitle = title.innerHTML
title.innerHTML = originalTitle + ' (' + cards.length + ')'
