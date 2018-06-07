const sharp = require('sharp');
const fs = require('fs');

const roundedCorners = new Buffer(
  '<svg><rect fill="red" x="0" y="0" width="200" height="200"/></svg>'
);

const roundedCornerResizer =
  sharp(roundedCorners)
    .resize(200, 200)
    .overlayWith(roundedCorners, { cutout: true })
    .png()
    .toFile('output.png')
    // .toBuffer()
    // .then(data => {
    //   console.log(Buffer.isBuffer(data));
    // })
    // .catch(err => {
    //   console.error(err)
    // })

// readableStream
//   .pipe(roundedCornerResizer)
//   .pipe(writableStream);
