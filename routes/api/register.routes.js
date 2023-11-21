const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const gravatar = require('gravatar');

const registrationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

router.post('/signup', async (req, res) => {
  try {
    const { error } = registrationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password } = req.body;
    console.log('Received password for registration:', password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email in use' });
    }

    const avatarURL = gravatar.url(email, {
      s: '250', 
      r: 'pg', 
      d: 'mm', 
    });

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log('Hashed Password:', hashedPassword);
    const newUser = new User({ email, password, avatarURL });
    await newUser.save();

    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL
      },
    });
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
});

module.exports = router;
