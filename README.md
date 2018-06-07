# gaialor

一个纯色图片生成器

gaialor --help
----------------------------------------------------
## usage
```
gaialor [--help] <command> [<args>]

command:
  make: 制造图片

  --help 显示帮助信息
----------------------------------------------------
usage: gaialor make file_name [--help] [--width <width>] [--height <height>] [--format <format>]

--width     生成图片的宽度 单位是px
--height    生成图片的高度 单位是px
--format    生成图片的格式 png | jpeg
--color     生成图片的颜色 格式是hex 默认为#ffffff
```

"preinstall": "node -e \"if(process.env.npm_execpath.indexOf('yarn') === -1) throw new Error('gaialor must be installed with Yarn: https://yarnpkg.com/')\""