// tslint:disable:no-console
import colors from 'colors'
import program from 'commander'
import sharp from 'sharp'
import { formateColor, isColor, isNaN } from './utils/index'


program
  .option('--width <width>', '图片的宽度')
  .option('--height <height>', '图片的高度')
  .option('--format <format>', '图片的格式')
  .option('--color <color>', '图片的颜色 格式是hex 默认为ffffff')

program.parse(process.argv);

(() => {
  const formatList = ['png', 'jpeg']

  const width = program.width || 100
  const height = program.height || 100
  const format = program.format || 'png'
  const color = program.color || '#ffffff'

  if (width && isNaN(+width)) {
    console.log(colors.red('Message: width error'))
    program.help()
  }

  if (height && isNaN(+height)) {
    console.log(colors.red('Message: height error'))
    program.help()
  }

  if (format && (formatList.indexOf(format) < 0)) {
    console.log(colors.red('Message: format error'))
    program.help()
  }

  if (color && !(isColor(color))) {
    console.log(colors.red('Message: color error'))
    program.help()
  }

  const roundedCorners = new Buffer(
    `<svg><rect fill="${formateColor(color)}" x="0" y="0" width="${width}" height="${height}"/></svg>`
  )


  sharp(roundedCorners)
    .resize(width, height)
    .overlayWith(roundedCorners, { cutout: true })
    .toFormat(format)
    .toFile(`${program.args[0]}.${format}`)

})()