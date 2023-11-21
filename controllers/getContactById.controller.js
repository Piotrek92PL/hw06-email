const contactsService = require('../services/contacts.service');

const getContactById = async (req, res, next) => {
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (contact) {
      res.json({ status: 'success', code: 200, data: { contact } });
    } else {
      res.status(404).json({ status: 'error', code: 404, message: 'Not found', data: 'Not Found' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = getContactById;
