const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema

const userSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    booking: {
        hotels: [
            {hotelId: {
                type: Schema.Types.ObjectId,
                ref: 'Hotel',
                required: true
            }}
        ]
    },
    admin: {
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema);

