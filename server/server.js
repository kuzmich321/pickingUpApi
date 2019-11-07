global.fetch = require('node-fetch');
const config = require('universal-config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/photos', require('../routes/profile'));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
