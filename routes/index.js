const express = require('express');
const router = express.Router();
const passport = require('passport');
//destructure object ot pull necessary methods
const {
  postRegister, postLogin, getLogout
} = require('../controllers/index');
const {
  errorHandler
} = require('../middleware/index');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Surf Shop Home'
  });
});

/* GET register page. */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register  */
router.post('/register', errorHandler(postRegister));

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login  */
router.post('/login', postLogin);

/*  GET /logout */ 
router.get('/logout', getLogout);

/* GET /profile  */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id  */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile');
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send('GET /forgot');
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.send('PUT /forgot');
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset/:token  */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});


module.exports = router;