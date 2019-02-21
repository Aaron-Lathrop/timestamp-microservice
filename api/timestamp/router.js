'use strict';

const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/:date_string', (req, res) => {
    console.log('Your router is working as expected.')
});

module.exports = { router };