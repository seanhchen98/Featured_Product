/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const { featureProduct } = require('../database_sdc/index.js');

const app = express();
app.use('/product/:productId', express.static(path.join(__dirname, '../dist')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.get('/api/product:productId', (req, res) => {
  const pid = req.params.productId;
  featureProduct(pid, (err, result) => {
    if (err) {
      res.status(400).end('error');
    }
    res.status(200).send(result);
  });
});

app.listen(3001, () => {
  console.log('listening on port 3001...');
});

module.exports = app;
