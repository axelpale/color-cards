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

// Color limits
const limits = [
  {
    lmin: 80,
    lmax: 80,
    lstep: 5,
    amin: -40,
    amax: -10,
    astep: 5,
    bmin: -40,
    bmax: -10,
    bstep: 5
  }
]

// Generate colors
const sheets = limits.map((lim) => {
  const groups = []
  for (let l = lim.lmin; l <= lim.lmax; l += lim.lstep) {
    const rows = []
    for (let a = lim.amin; a <= lim.amax; a += lim.astep) {
      const row = []
      for (let b = lim.bmin; b <= lim.bmax; b += lim.bstep) {
        const color = d3.lab(l, a, b)
        if (color.displayable()) {
          row.push(color)
        }
      }
      rows.push(row)
    }
    groups.push(rows)
  }
  return groups
})

// Generate cards
const cardSheets = sheets.map((groups) => {
  const cardGroups = groups.map((rows) => {
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
    return '<div class="cardgroup">' + cardRows.join('\n') + '</div>'
  })
  return '<div class="cardsheet">' + cardGroups.join('\n') + '</div>'
})

container.innerHTML = cardSheets.join('\n')

const originalTitle = document.title
document.title = originalTitle + ' (' + cardSheets.length + ')'
