const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a hotel schema

const hotelSchema = new Schema({
    hotelName: {
        type: String,
        required: true
    },
    hotelAddress: {
        type: String,
        required: true
    },
    city: {
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
    stars: {
        type: Number,
        required: true
    },
    images: {
        type: String
    },
    rooms: {
        roomType: {
            type: String,
            required : true
        },
        roomCapacity: {
            type: Number,
            required : true
        },
        roomPrice: {
            type: Number,
            required : true
        },
        noOfRooms : {
            type: Number,
            required : true
        },
    },
    description: {
        type: String,
        required: true
    }
    // ratings: {
    //     userId: {
    //         type: Schema.Types.ObjectId
    //     },
    //     rating: {
    //         type: Number
    //     }
    // },
    // reviews: {
    //     userId: {
    //         type: Schema.Types.ObjectId
    //     },
    //     reviews: {
    //         type: String
    //     }
    // }
})


//exports
module.exports = mongoose.model('Hotel', hotelSchema);