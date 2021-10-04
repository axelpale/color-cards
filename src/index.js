// Rendering Parameters

require('./style.css')
const container = document.querySelector('#container')
const rgb = require('./rgb')

const colors = []

// Generate colors
for (let i = 0.0; i < 1.0; i += 0.1) {
  for (let j = 0.0; j < i; j += 0.1) {
    colors.push({
      r: j * 256,
      g: j * 256,
      b: i * 256
    })
  }
}

// Generate cards
const cards = colors.map((color) => {
  return '<div style="' +
    'background-color: ' + rgb.css(color) + ';' +
    'width: 10em;' +
    'height: 10em;' +
    '"></div>' +
    '<div class="color-label">' +
    rgb.label(color) +
    '</div>'
})

const body = cards.join('\n')

container.innerHTML = body
