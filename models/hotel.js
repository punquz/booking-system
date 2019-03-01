const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const Schema = mongoose.Schema;

//create a hotel schema

const hotelSchema = new Schema({
    hotelName: {
        type: String,
        es_type: 'text',
        es_analyzer: 'autocomplete',
        es_search_analyzer: 'standard',
        required: true
    },
    hotelAddress: {
        type: String,
        es_type: 'text',
        es_analyzer: 'autocomplete',
        es_search_analyzer: 'standard',
        required: true
    },
    city: {
        type: String,
        es_type: 'text',
        es_analyzer: 'autocomplete',
        es_search_analyzer: 'standard',
        required: true
    },
    province: {
        type: String,
        es_type: 'text',
        required: true
    },
    zipCode: {
        type: Number,
        es_type: 'long',
        required: true
    },
    stars: {
        type: Number,
        es_type: 'long',
        required: true
    },
    images: {
        type: String,
        es_type: 'text'
    },
    rooms: {
        roomType: {
            type: String,
            es_type: 'text',
            required : true
        },
        roomCapacity: {
            type: Number,
            es_type: 'long',
            required : true
        },
        roomPrice: {
            type: Number,
            es_type: 'long',
            required : true
        },
        noOfRooms : {
            type: Number,
            es_type: 'long',
            required : true
        },
    },
    userId: {
        type: Schema.Types.ObjectId,
        es_type: 'text',
        ref: 'User'
    },
    description: {
        type: String,
        es_type: 'text',
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

hotelSchema.plugin(mongoosastic, {
    hosts: [
        'localhost:9200'
    ]
})

//exports
module.exports = mongoose.model('Hotel', hotelSchema);