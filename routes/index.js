const express = require('express');
const router = express.Router();

// get data
// http://localhost:3000/contacts
// http://localhost:3000/contacts/id

router.use('/contacts', require('./contacts.js'))

module.exports = router;