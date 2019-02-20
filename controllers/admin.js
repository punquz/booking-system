const Hotel = require('../models/hotel');


exports.getAddHotels =  (req, res, next) => {
    res.render('admin/add-hotel', {
      pageTitle: 'Add Hotel',
      path: '/admin/add-hotel'
    });
  }

exports.getEditHotel = (req, res, next) => {
    const hotelID = req.params.hotelId;
    Hotel.findById(hotelID, hotel => {
        res.render('admin/edit-hotel', {
            hotel: hotel,
            pageTitle: hotel.title,
            path: ''
        })
    });
   
}
//add a hotel
exports.postAddHotels =  (req, res, next) => {
    const hotelName = req.body.hotelName;
    const hotelAddress = req.body.hotelAddress;
    const city = req.body.city;
    const province = req.body.province;
    const zipCode = req.body.zipCode;
    const stars = req.body.stars;
    const images = req.body.images;
    const roomType = req.body.roomType;
    const roomCapacity = req.body.roomCapacity;
    const roomPrice = req.body.roomPrice;
    const noOfRooms = req.body.noOfRooms;
    const description = req.body.description;

    const hotel = new Hotel({
      hotelName: hotelName,
      hotelAddress: hotelAddress,
      city: city,
      province: province,
      zipCode: zipCode,
      stars: stars,
      images: images,
      rooms: [{
        roomType: roomType,
        roomCapacity: roomCapacity,
        roomPrice: roomPrice,
        noOfRooms: noOfRooms
      }],
      description: description
    })
    hotel.save()
    .then(result => {
      console.log('added hotel');
      res.redirect('/');
    })
    .catch(err => console.log(err));
  }

  exports.getHotels =  (req, res, next) => {
    Hotel.fetchALL((hotels) => {
        res.render('admin/hotel-list', {
            hotels: hotels,
            pageTitle: 'Admin Hotels',
            path: '/admin/hotels',
            hasProducts: hotels.length > 0,
            activeShop: true,
            productCSS: true
          });
    });
    
  }