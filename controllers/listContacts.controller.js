const contactsService = require('../services/contacts.service');

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.json({ status: 'success', code: 200, data: { contacts } });
  } catch (e) {
    next(e);
  }
};

module.exports = listContacts;
