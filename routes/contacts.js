const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');

// getAll data
router.get('/', contactsController.getAll);

// get by Id
router.get('/:id', contactsController.getSingle);

module.exports = router;