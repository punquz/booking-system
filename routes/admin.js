const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//get all hotels
router.get('/hotels', isAuth, adminController.getHotels);

// /admin/add-product => GET
router.get('/add-hotel', isAuth, adminController.getAddHotels);

// /admin/add-product => POST
router.post('/add-hotel', isAuth, adminController.postAddHotels);

// edit a hotel
router.get('/edit-hotel/:hotelId', isAuth, adminController.getEditHotel);

//post update hotel
router.post('/update-hotel', isAuth, adminController.postUpdateHotel);

//post delete a hotel
router.post('/delete-hotel', isAuth, adminController.postDeleteHotel);

//hotel bookings
router.get('/mybooking', isAuth, adminController.getBooking);

// edit a booking
router.get('/edit-booking/:bookingId', isAuth, adminController.getEditBooking);

//post update a booking
router.post('/update-booking', isAuth, adminController.postUpdateBooking);

//post delete a booking
router.post('/delete-booking', isAuth, adminController.postDeleteBooking);


module.exports = router;
