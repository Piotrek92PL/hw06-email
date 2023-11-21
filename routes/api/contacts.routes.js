const express = require('express');
const router = express.Router();

const listContacts = require('../../controllers/listContacts.controller');
const getContactById = require('../../controllers/getContactById.controller');
const addContact = require('../../controllers/addContact.controller');
const removeContact = require('../../controllers/removeContact.controller');
const updateContact = require('../../controllers/updateContact.controller');
const updateFavoriteStatus = require('../../controllers/updateFavoriteStatus.controller');

router.get('/', listContacts);
router.get('/:contactId', getContactById);
router.post('/', addContact);
router.delete('/:contactId', removeContact);
router.put('/:contactId', updateContact);
router.patch('/:contactId/favorite', updateFavoriteStatus);

module.exports = router;
