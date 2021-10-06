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
const sheets = [
  {
    lmin: 50,
    lmax: 50,
    lstep: 5,
    amin: 0,
    amax: 35,
    astep: 5,
    bmin: -75,
    bmax: -55,
    bstep: 5
  },
  {
    lmin: 60,
    lmax: 60,
    lstep: 5,
    amin: -15,
    amax: 20,
    astep: 5,
    bmin: -60,
    bmax: -40,
    bstep: 5
  },
  {
    lmin: 65,
    lmax: 65,
    lstep: 5,
    amin: -20,
    amax: 15,
    astep: 5,
    bmin: -50,
    bmax: -30,
    bstep: 5
  },
  {
    lmin: 70,
    lmax: 70,
    lstep: 5,
    amin: -30,
    amax: 5,
    astep: 5,
    bmin: -45,
    bmax: -25,
    bstep: 5
  },
  {
    lmin: 75,
    lmax: 75,
    lstep: 5,
    amin: -35,
    amax: -35 + 35,
    astep: 5,
    bmin: -35,
    bmax: -15,
    bstep: 5
  },
  {
    lmin: 80,
    lmax: 80,
    lstep: 5,
    amin: -40,
    amax: -5,
    astep: 5,
    bmin: -30,
    bmax: -10,
    bstep: 5
  },
  {
    lmin: 85,
    lmax: 85,
    lstep: 5,
    amin: -50,
    amax: -15,
    astep: 5,
    bmin: -20,
    bmax: 0,
    bstep: 5
  },
  {
    lmin: 90,
    lmax: 90,
    lstep: 5,
    amin: -55,
    amax: -20,
    astep: 5,
    bmin: -15,
    bmax: 5,
    bstep: 5
  },
  {
    lmin: 90,
    lmax: 90,
    lstep: 5,
    amin: -15,
    amax: 20,
    astep: 5,
    bmin: -15,
    bmax: 5,
    bstep: 5
  }
]

// Generate colors
const colorSheets = sheets.map((lim) => {
  const groups = []
  for (let l = lim.lmin; l <= lim.lmax; l += lim.lstep) {
    const rows = []
    for (let a = lim.amin; a <= lim.amax; a += lim.astep) {
      const row = []
      for (let b = lim.bmin; b <= lim.bmax; b += lim.bstep) {
        const color = d3.lab(l, a, b)
        row.push(color)
      }
      rows.push(row)
    }
    groups.push(rows)
  }
  return groups
})

// Generate cards
const sheetsHtml = colorSheets.map((groups) => {
  const cardGroups = groups.map((rows) => {
    const cardRows = rows.map(row => {
      const cards = row.map((color) => {
        if (!color.displayable()) {
          return '<div class="card color non-displayable color-box"></div>'
        }
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

container.innerHTML = sheetsHtml.join('\n')

const originalTitle = document.title
document.title = originalTitle + ' (' + colorSheets.length + ')'
