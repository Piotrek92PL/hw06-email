const contactsService = require('../services/contacts.service');

const addContact = async (req, res, next) => {
  try {
    const newContact = await contactsService.addContact(req.body);
    res.status(201).json({ status: 'success', code: 201, data: { newContact } });
  } catch (e) {
    next(e);
  }
};

module.exports = addContact;
