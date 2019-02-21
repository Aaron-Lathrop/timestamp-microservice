'use strict';

const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    const date = new Date();
    res.json({unix: date.getTime(), utc: date.toUTCString()}).end();
});

router.get('/:date_string', (req, res) => {
    const dateString = req.params.date_string;
    let date;

    if(dateString.search("-") >= 0) {
        date = new Date(dateString);
    } else {
        date = new Date(parseInt(dateString, 10));
    }

    if(date == "Invalid Date") {
        res.json({error: "Invalid Date"})
    }

    res.json({unix: date.getTime(), utc: date.toUTCString()}).end();
});

module.exports = { router };