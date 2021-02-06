/* eslint-disable max-len */
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs');

const writer = csvWriter();

const generateData = () => {
  writer.pipe(fs.createWriteStream('data.csv'));
  for (let i = 0; i < 10000000; i += 1) {
    console.log('current at iteration: ', i);
    const randImg = faker.random.number({ min: 0, max: 1000 });
    writer.write({
      productId: i,
      name: faker.commerce.productName(),
      brand: faker.commerce.department(),
      rating: faker.random.number({ min: 1, max: 5, precision: 0.01 }),
      ratingCount: faker.random.number({ min: 1, max: 1000 }),
      price: faker.commerce.price(),
      color: JSON.stringify({
        shade: faker.commerce.color,
        img: `https://hrsjo3-sdc-rei-featuredproducts.s3-us-west-1.amazonaws.com/photos/img_${randImg}.png`,
      }),
      description: faker.commerce.productDescription(),
      features: JSON.stringify({
        values: [faker.random.words(5), faker.random.words(4), faker.random.words(6), faker.random.words(5)],
      }),
      bestUse: faker.random.word(),
      materials: faker.commerce.productMaterial(),
      dimensions: JSON.stringify({
        values: [faker.random.number(15), faker.random.number(15), faker.random.number(15)],
      }),
      weight: JSON.stringify({
        value: [faker.random.number(100), faker.random.number(15)],
      }),
    });
  }
  writer.end();
  console.log('done');
};

generateData();
