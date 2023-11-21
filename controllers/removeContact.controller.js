const contactsService = require('../services/contacts.service');

const removeContact = async (req, res, next) => {
  try {
    const contact = await contactsService.removeContact(req.params.contactId);
    if (contact) {
      res.json({ status: 'success', code: 200, message: 'Contact deleted' });
    } else {
      res.status(404).json({ status: 'error', code: 404, message: 'Not found', data: 'Not Found' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = removeContact;
