const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
