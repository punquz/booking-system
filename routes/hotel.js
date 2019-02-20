const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

const hotelsController = require('../controllers/hotels');

router.get('/', hotelsController.getHome);

router.get('/hotels', hotelsController.getHotels);
router.get('/hotels/:hotelId', hotelsController.getHotelDetail);

router.get('/mybooking', hotelsController.getBooking);

module.exports = router;
