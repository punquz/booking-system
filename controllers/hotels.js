const Hotel = require('../models/hotel');

exports.getHome = (req, res, next) => {
    res.render('hotel/index', {
        pageTitle: 'Home',
        path: '/',
        activeHome: true
    })
}

exports.getHotels =  (req, res, next) => {
    Hotel.find({}, function(err, hotels){
       if(err) {
           console.log(err);
       }
        res.render('hotel/hotel', {
            hotels: hotels,
            pageTitle: 'Home',
            path: '/hotels'
          });
    });
    
  }

exports.getHotelDetail = (req, res, next) => {
    const hotelID = req.params.hotelId;
    Hotel.findById(hotelID, hotel => {
        res.render('hotel/hotel-details', {
            hotel: hotel,
            pageTitle: hotel.title,
            path: '/hotels'
        })
    });
    // res.render('hotel/hotel-details', {
    //     pageTitle: ""
    // }) 
}

exports.getBooking = (req, res, next) => {
    res.render('hotel/myBooking', {
        pageTitle: "My Bookings",
        path: '/mybooking'
    })
}