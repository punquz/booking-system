const Hotel = require('../models/hotel');
const BookHotel = require('../models/book-hotel');

exports.getHome = (req, res, next) => {
    res.render('hotel/index', {
        pageTitle: 'Home',
        path: '/',
        activeHome: true,
        isAuthenticated: req.session.isLoggedIn,
        isAdmin: req.session.user
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
            path: '/hotels',
            isAuthenticated: req.session.isLoggedIn,
            isAdmin: req.session.user
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
            path: '/hotels',
            isAuthenticated: req.session.isLoggedIn,
            isAdmin: req.session.user

        })
    })
    .catch(err =>  console.log(err));
    
}


//get book hotel

exports.getBookHotel = (req, res, next) => {
    hotelId = req.params.bookId;
    Hotel.findById(hotelId)
    .then(hotel => {
        console.log(hotel);
        res.render('hotel/book-hotel', {
            pageTitle: "hotel booking",
            path: '/booking hotel',
            hotel: hotel,
            isAuthenticated: false,
            isAdmin: false
        })
    })
    .catch(err => console.log(err))
    
}

//post book hotel
exports.postBookhotel = (req, res, next) => {
    const email = req.body.email;
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const address = req.body.address;
    const phone = req.body.phone;
    const country = req.body.country;
    const province = req.body.province;
    const zipCode = req.body.zipCode;
    const comment = req.body.comment;
    const hotelId = req.body.hotelId;
    
    const bookHotel = new BookHotel({
        email: email,
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
        country: country,
        province: province,
        zipCode: zipCode,
        comment: comment,
        bookings: hotelId
      })
      bookHotel.save()
      .then(result => {
          console.log('hotel booked');
          res.redirect('/');
      })
      .catch(err => {
          console.log(err);
      })
}

//booking status
exports.getBookingStatus = (req, res, next) => {
    res.render('hotel/booking-status', {
        path: '/status',
        isAdmin: false,
        isAuthenticated: false,
        pageTitle: 'Booking status'
    })
}
exports.postBookingStatus = (req, res, next) => {
    let Id = req.body.search;
   BookHotel.findById(Id)
   .then(hotel => {
           Hotel.findById(hotel.bookings)
           .then(hits => {
            res.render('hotel/booking-ticket-search', {
                path: '/status',
                isAdmin: false,
                isAuthenticated: false,
                pageTitle: 'Booking status',
                hotel: hotel,
                hits: hits
            })
           })  
   })
   .catch(err => console.log(err));
}