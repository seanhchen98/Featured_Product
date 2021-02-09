/* eslint-disable no-console */
/* eslint-disable max-len */
// const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');

// const writer = csvWriter();
// const writeUsers = fs.createWriteStream('data.csv');
const writeUsers = fs.createWriteStream('data.csv');
writeUsers.write('productId|name|brand|department|rating|ratingCount|price|shade|img|description|features|bestUse|materials|dimensions|weight\n', 'utf8');

const generateData = (writer, encoding, cb) => {
  // let iterations = 10;
  let iterations = 10000000;
  let id = 0;
  const write = () => {
    console.log(id);
    let ok = true;
    do {
      const randImg = faker.random.number({ min: 0, max: 999 });
      iterations -= 1;
      id += 1;
      const productId = id;
      const name = faker.commerce.productName();
      const brand = faker.random.word();
      const department = faker.commerce.department();
      const rating = faker.random.number({ min: 1, max: 5, precision: 0.01 });
      const ratingCount = faker.random.number({ min: 1, max: 100 });
      const price = faker.commerce.price();
      // const color = JSON.stringify({
      //   shade: faker.commerce.color(),
      //   img: `https://hrsjo3-sdc-rei-featuredproducts.s3-us-west-1.amazonaws.com/photos/img_${randImg}.png`,
      // });
      const shade = faker.commerce.color();
      const img = `https://hrsjo3-sdc-rei-featuredproducts.s3-us-west-1.amazonaws.com/photos/img_${randImg}.png`;
      const description = faker.commerce.productDescription();
      let features = JSON.stringify([faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective(), faker.commerce.productAdjective()]);
      features = features.replace('[', '{');
      features = features.replace(']', '}');
      const bestUse = faker.random.word();
      const materials = faker.commerce.productMaterial();
      let dimensions = JSON.stringify([faker.random.number(15), faker.random.number(15), faker.random.number(15)]);
      dimensions = dimensions.replace('[', '{');
      dimensions = dimensions.replace(']', '}');
      // const weight = JSON.stringify({
      //   value: [faker.random.number(100), faker.random.number(15)],
      // });
      let weight = JSON.stringify([faker.random.number(100), faker.random.number(15)]);
      weight = weight.replace('[', '{');
      weight = weight.replace(']', '}');
      const data = `${productId}|${name}|${brand}|${department}|${rating}|${ratingCount}|${price}|${shade}|${img}|${description}|${features}|${bestUse}|${materials}|${dimensions}|${weight}\n`;
      if (iterations === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (iterations > 0 && ok);
    if (iterations > 0) {
      // had to stop early!
      // wirte some more once it drains
      writer.once('drain', write);
    }
  };
  write();
};

generateData(writeUsers, 'utf-8', () => {
  writeUsers.end();
});

// const generateData = () => {
//   let iterations = 10000000;
//   let index = 0;
//   writer.pipe(fs.createWriteStream('data.csv'));
//   const generate = () => {
//     let ok = true;
//     while (iterations > 0 && ok) {
//       console.log(index);
//       const randImg = faker.random.number({ min: 0, max: 1000 });
//       writer.write({
//         productId: index,
//         name: faker.commerce.productName(),
//         brand: faker.commerce.department(),
//         rating: faker.random.number({ min: 1, max: 5, precision: 0.01 }),
//         ratingCount: faker.random.number({ min: 1, max: 1000 }),
//         price: faker.commerce.price(),
//         color: JSON.stringify({
//           shade: faker.commerce.color,
//           img: `https://hrsjo3-sdc-rei-featuredproducts.s3-us-west-1.amazonaws.com/photos/img_${randImg}.png`,
//         }),
//         description: faker.commerce.productDescription(),
//         features: JSON.stringify({
//           values: [faker.random.words(5), faker.random.words(4), faker.random.words(6), faker.random.words(5)],
//         }),
//         bestUse: faker.random.word(),
//         materials: faker.commerce.productMaterial(),
//         dimensions: JSON.stringify({
//           values: [faker.random.number(15), faker.random.number(15), faker.random.number(15)],
//         }),
//         weight: JSON.stringify({
//           value: [faker.random.number(100), faker.random.number(15)],
//         }),
//       });
//     }
//   };
//   writer.end();
//   console.log('done');
// };

// generateData();
