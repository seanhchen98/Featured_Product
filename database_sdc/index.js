const { Client } = require('pg');

const client = new Client();

client.connect();

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
