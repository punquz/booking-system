const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

//get all hotels
router.get('/hotels', adminController.getHotels);

// /admin/add-product => GET
router.get('/add-hotel', adminController.getAddHotels);

// /admin/add-product => POST
router.post('/add-hotel', adminController.postAddHotels);

// edit a hotel
router.get('/edit-hotel/:hotelId', adminController.getEditHotel);

//post update hotel
router.post('/update-hotel', adminController.postUpdateHotel);

//post delete a hotel
router.post('/delete-hotel', adminController.postDeleteHotel);

//hotel bookings
router.get('/mybooking', adminController.getBooking);

// edit a booking
router.get('/edit-booking/:bookingId', adminController.getEditBooking);

//post update a booking
router.post('/update-booking', adminController.postUpdateBooking);

//post delete a booking
router.post('/delete-booking', adminController.postDeleteBooking);


module.exports = router;
