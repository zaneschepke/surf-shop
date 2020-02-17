// Post Model
const mongoose = require('mongooose'), 
    passportLocalMongoose = require('passport-local-mongoose');
    Schema = mongoose.Schema;

const PostSchema = new Schema({
        title: String, 
        price: String, 
        description: String, 
        images: [ String ],
        location: String, 
        lat: Number, 
        lng: Number,
        authour: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reviews: {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }      
    });

PostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post', PostSchema);

