// Rendering Parameters

const container = document.querySelector('#container')
const cssrgb = require('./cssrgb')

const colors = []

// Generate colors
for (let i = 0.0; i < 1; i += 0.1) {
  colors.push({
    r: 0,
    g: 0,
    b: i * 256
  })
}

// Generate cards
const cards = colors.map((color) => {
  return '<div style="' +
    'background-color: ' + cssrgb(color) + ';' +
    'width: 10em;' +
    'height: 10em;' +
    '"></div>'
})

const body = cards.join('\n')

container.innerHTML = body
