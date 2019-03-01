const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a booking schema
const bookingSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    country : {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    bookings: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel'
    }
  })

  module.exports = mongoose.model('BookHotel', bookingSchema);