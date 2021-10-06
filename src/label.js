exports.css = (rgb) => {
  return 'rgb(' +
    Math.round(rgb.r) + ',' +
    Math.round(rgb.g) + ',' +
    Math.round(rgb.b) + ')'
}

exports.hex = (rgb) => {
  return 'HEX ' +
    Math.round(rgb.r).toString(16) + ' ' +
    Math.round(rgb.g).toString(16) + ' ' +
    Math.round(rgb.b).toString(16)
}

exports.rgb = (rgb) => {
  return 'RGB ' +
    Math.round(rgb.r) + ' ' +
    Math.round(rgb.g) + ' ' +
    Math.round(rgb.b)
}

exports.cielab = (lab) => {
  return 'LAB ' +
    Math.round(lab.l) + ' ' +
    Math.round(lab.a) + ' ' +
    Math.round(lab.b)
}

exports.cielch = (lch) => {
  return 'LCH ' +
    Math.round(lch.l) + ' ' +
    Math.round(lch.c) + ' ' +
    Math.round(lch.h)
}
