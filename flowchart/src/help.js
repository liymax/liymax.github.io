export function setAttrs(selection, attrs) {
  Object.entries(attrs).forEach(([k, v]) => {
    selection.attr(k, v)
  })
  return selection
}
export function setStyles(selection, styles) {
  Object.entries(styles).forEach(([k, v]) => {
    selection.style(k, v)
  })
  return selection
}

export function guid() {
  return 'xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
