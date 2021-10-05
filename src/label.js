exports.css = (rgb) => {
  return 'rgb(' +
    Math.floor(rgb.r) + ',' +
    Math.floor(rgb.g) + ',' +
    Math.floor(rgb.b) + ')'
}

exports.hex = (rgb) => {
  return 'HEX ' +
    Math.floor(rgb.r).toString(16) + ' ' +
    Math.floor(rgb.g).toString(16) + ' ' +
    Math.floor(rgb.b).toString(16)
}

exports.rgb = (rgb) => {
  return 'RGB ' +
    Math.floor(rgb.r) + ' ' +
    Math.floor(rgb.g) + ' ' +
    Math.floor(rgb.b)
}

exports.cielch = (lch) => {
  return 'LCH ' +
    Math.floor(lch.l) + ' ' +
    Math.floor(lch.c) + ' ' +
    Math.floor(lch.h)
}
