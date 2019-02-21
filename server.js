'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

const { router: timestampRouter } = require('./api/timestamp/router');

app.use(express.json());
app.use(morgan('common'));

app.use('/api/timestamp', timestampRouter);

// Catch all, if the user enters the wrong url, they get an error
app.use('*', function(req, res) {
    res.status(404).json({ message: "Page not found."})
})

app.listen(port, () => {
    console.log(`Your app is listening on port: ${port}`);
});