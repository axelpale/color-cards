exports.create = (r, g, b) => {
  return {
    r: r,
    g: g,
    b: b
  }
}

exports.css = (rgb) => {
  return 'rgb(' +
    Math.floor(rgb.r) + ',' +
    Math.floor(rgb.g) + ',' +
    Math.floor(rgb.b) + ')'
}

exports.hex = (rgb) => {
  return '#' +
    Math.floor(rgb.r).toString(16) +
    Math.floor(rgb.g).toString(16) +
    Math.floor(rgb.b).toString(16)
}

exports.label = (rgb) => {
  return 'RGB ' +
    Math.floor(rgb.r) + ' ' +
    Math.floor(rgb.g) + ' ' +
    Math.floor(rgb.b)
}
