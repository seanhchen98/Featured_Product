/* eslint-disable no-console */
const request = require('request');
const fs = require('fs');

const generatePhotos = (start, end) => {
  const uri = 'https://loremflickr.com/320/240';
  for (let i = start; i < end; i += 1) {
    console.log('hello, at: ', i);
    const filename = `./photos/img_${i}.png`;
    request(uri).pipe(fs.createWriteStream(filename));
  }
  // const filename = './photos/img_1.png';
  // request(uri).pipe(fs.createWriteStream(filename));
};
// generatePhotos(0, 500);
generatePhotos(500, 1000);
// console.log('split to not crash loremflickr');
// generatePhotos(500, 1000);
