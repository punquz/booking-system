const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

const hotelsController = require('../controllers/hotels');

//homepage
router.get('/', hotelsController.getHome);

//display all hotels
router.get('/hotels', hotelsController.getHotels);

//display specific hotel
router.get('/hotels/:hotelId', hotelsController.getHotelDetail);

router.get('/mybooking', hotelsController.getBooking);

module.exports = router;
