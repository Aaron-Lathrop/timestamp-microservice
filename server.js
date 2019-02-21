'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('common'));

const port = 3000;

app.listen(port, () => {
    console.log(`Your app is listening on port: ${port}`);
});