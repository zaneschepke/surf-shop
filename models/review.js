// Review Model
const mongoose = require('mongooose'), 
    passportLocalMongoose = require('passport-local-mongoose');
    Schema = mongoose.Schema;

const ReviewSchema = new Schema({
        body: String,
        authour: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }     
    });

ReviewSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Review', ReviewSchema);

