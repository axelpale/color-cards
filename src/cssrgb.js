module.exports = (rgb) => {
  return 'rgb(' +
    Math.floor(rgb.r) + ',' +
    Math.floor(rgb.g) + ',' +
    Math.floor(rgb.b) + ')'
}
