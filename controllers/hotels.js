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
       let data = hotels.map(function(hit){
            return hit;
        });
        res.render('hotel/hotel', {
            hit: data,
            pageTitle: 'Home',
            path: '/hotels'
          });
    });
    
  }

exports.getHotelDetail = (req, res, next) => {
    const hotelID = req.params.hotelId;
    Hotel.findById(hotelID)
    .then(hotels => {
        res.render('hotel/hotel-details', {
            hotel: hotels,
            pageTitle: hotels.title,
            path: '/hotels'
        })
    })
    .catch(err =>  console.log(err));
    
}

exports.getBooking = (req, res, next) => {
    res.render('hotel/myBooking', {
        pageTitle: "My Bookings",
        path: '/mybooking'
    })
}