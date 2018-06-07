// tslint:disable:no-console
import program from 'commander'

program
  .version('0.0.1')
  .command('make [file]', '制作图片')

program.parse(process.argv)
