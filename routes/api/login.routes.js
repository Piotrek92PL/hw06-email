const express = require('express');
const router = express.Router();
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

router.post('/login', async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      console.log('Login validation error:', error.details[0].message);
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password } = req.body;
    console.log(`Login attempt for email: ${email}`, password);

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found during login:', email);
      return res.status(401).json({ message: 'Email or password is wrong' });
    }

    console.log(`Stored hashed password for user ${email}:`, user.password);
 
    console.log(`Password provided for login: ${password}`);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match for user ${email}:`, isMatch);
    
    if (!isMatch) {
      console.log('Password mismatch for user:', email);
      return res.status(401).json({ message: 'Email or password is wrong' });
    }

    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'your_default_secret', {
      expiresIn: '1h',
    });

    console.log(`User logged in successfully: ${email}`);
    res.json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: { email: user.email, subscription: user.subscription },
      },
    });
  } catch (error) {
    console.error('Error in user login:', error);
    res.status(400).json({ message: 'Bad request' });
  }
});

module.exports = router;
