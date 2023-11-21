const contactsService = require('../services/contacts.service');

const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await contactsService.updateContact(req.params.contactId, req.body);
    if (updatedContact) {
      res.json({ status: 'success', code: 200, data: { updatedContact } });
    } else {
      res.status(404).json({ status: 'error', code: 404, message: 'Not found', data: 'Not Found' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = updateContact;
