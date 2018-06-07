// tslint:disable:no-console

const colorList = [
  'aqua',
  'black',
  'blue',
  'fuchsia',
  'gray',
  'green',
  'lime',
  'maroon',
  'navy',
  'olive',
  'orange',
  'purple',
  'red',
  'silver',
  'teal',
  'white',
  'yellow',
]

export const isNaN = (value: string | number):boolean => {
  const n = Number(value)
  return n !== n
}

export const isColor = (value: string):boolean => {
  if (colorList.indexOf(value) > -1) { return true }
  const type = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  if (value.match(type) !== null) { return true }
  return false
}

export const formateColor = (value: string):string => {
  if (colorList.indexOf(value) > -1) { return value }
  return `#${value}`
}
