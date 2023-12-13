import express from 'express';
import PasswordValidator from './password-validator.js';

export default express.Router().post('/validate-password', (req, res) => {
  try {
    new PasswordValidator(req.body.password).validate();
    return res.send('You have chosen a good password 👍🏼');
  } catch (error) {
    return res.status(400).send(error);
  }
});
