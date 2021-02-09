/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  user: 'seanhchen98',
  host: 'localhost',
  database: 'hrsjo3_sdc_featured_products',
  password: '',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

const featureProduct = (pid, callback) => {
  client.query(`SELECT * FROM featuredproducts WHERE productId = '${pid}';`, (err, result) => {
    if (err) {
      callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  featureProduct,
};
