const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if (req.user) {
    res.render('logged');
  } else res.redirect('/user/no-permission');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if (req.user) {
    res.render('profile');
  } else res.redirect('/user/no-permission');
});

router.get('/profile/profileSettings', (req, res) => {
  if (req.user) {
    res.render('profileSettings');
  } else res.redirect('/user/no-permission');
});

router.get('/auth.logout', (req, res) => {
  req.logout();
  res.redirect('/user/logged');
});

module.exports = router;
