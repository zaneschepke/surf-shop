const User = require('../models/user');
const passport = require('passport');

module.exports = {
    async postRegister(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            image: req.body.image
        })
        console.log('Registering new user..');
        //try catch alternative to error callback
        //wait until this is completed, must use aync function
        await User.register(newUser, req.body.password)
        res.redirect('/');
    },

    postLogin(req, res, next) {
        //higher order function
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login'
          })(req, res, next);
    }, 

    getLogout(req, res, next) {
        req.logout();
        res.redirect('/');
    }
}