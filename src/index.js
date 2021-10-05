// Rendering Parameters

require('./style.css')
const container = document.querySelector('#container')
const d3 = require('d3-color')
const label = require('./label')

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
const matrices = []
for (let l = 40; l <= 80; l += 20) {
  const rows = []
  for (let a = -60; a <= 0; a += 10) {
    const row = []
    for (let b = -60; b <= 0; b += 10) {
      const color = d3.lab(l, a, b)
      if (color.displayable()) {
        row.push(color)
      }
    }
    rows.push(row)
  }
  matrices.push(rows)
}

// Generate cards
const cardSheets = matrices.map((rows) => {
  const cardRows = rows.map(row => {
    const cards = row.map((color) => {
      const rgb = color.rgb()
      const card = '<div class="card color displayable">' +
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
        label.cielab(color) +
        '</div></div>'
      return card
    })
    return '<div class="cardrow">' + cards.join('\n') + '</div>'
  })
  return '<div class="cardsheet">' + cardRows.join('\n') + '</div>'
})

container.innerHTML = cardSheets.join('\n')

const title = document.querySelector('h1')
const originalTitle = title.innerHTML
title.innerHTML = originalTitle + ' (' + cardSheets.length + ')'
