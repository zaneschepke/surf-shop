// User Model
//passport local mongoose auto adds username and password
const mongoose = require('mongoose'), 
    passportLocalMongoose = require('passport-local-mongoose');
    Schema = mongoose.Schema;

const UserSchema = new Schema({
        email: String,
        image: String, 
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]        
    });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
