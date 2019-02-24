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

//hotel bokkings
router.get('/mybooking', adminController.getBooking);


module.exports = router;
