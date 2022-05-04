const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(compression());
app.use(morgan('dev'));
app.use('/', router);

const PORT = process.env.PORT | 4000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})
