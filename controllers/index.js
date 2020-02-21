const User = require('../models/user');

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
    }
}