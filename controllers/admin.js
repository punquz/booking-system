const Hotel = require('../models/hotel');

//get Add hotel
exports.getAddHotels =  (req, res, next) => {
    res.render('admin/add-hotel', {
      pageTitle: 'Add Hotel',
      path: '/admin/add-hotel'
    });
  }

//getEditHotel
exports.getEditHotel = (req, res, next) => {
    const hotelID = req.params.hotelId;
    Hotel.findById(hotelID)
    .then(hotel => {
      if(!hotel) {
        return res.redirect('/');
      }
      res.render('admin/edit-hotel', {
        hotel: hotel,
        pageTitle: hotel.title,
        path: ''
    })
    })
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
      rooms: {
        roomType: roomType,
        roomCapacity: roomCapacity,
        roomPrice: roomPrice,
        noOfRooms: noOfRooms
      },
      description: description
    })
    hotel.save()
    .then(result => {
      console.log('added hotel');
      res.redirect('/');
    })
    .catch(err => console.log(err));
  }

  //get all hotels
  exports.getHotels =  (req, res, next) => {

    Hotel.find({}, function(err, hotels){
      if(err) {
          console.log(err);
      }
     let data = hotels.map(function(hit){
          return hit;
      });
      res.render('admin/hotel-list', {
          hit: data,
          pageTitle: 'Admin Hotels',
          path: '/admin/hotels'
        });
  });  
  }

  //post update product
  exports.postUpdateHotel = (req, res, next) => {
    const hotelId = req.body.hotelId;
    const updatedHotelName = req.body.hotelName;
    const updatedHotelAddress = req.body.hotelAddress;
    const updatedCity = req.body.city;
    const updatedProvince = req.body.province;
    const updatedZipCode = req.body.zipCode;
    const updatedStars = req.body.stars;
    const updatedImages = req.body.images;
    const updatedRoomType = req.body.roomType;
    const updatedRoomCapacity = req.body.roomCapacity;
    const updatedRoomPrice = req.body.roomPrice;
    const updatedNoOfRooms = req.body.noOfRooms;
    const updatedDescription = req.body.description;

    Hotel.findById(hotelId)
    .then(hotel => {
      hotel.hotelName = updatedHotelName;
      hotel.hotelAddress = updatedHotelAddress;
      hotel.city = updatedCity;
      hotel.province = updatedProvince;
      hotel.zipCode = updatedZipCode;
      hotel.stars = updatedStars;
      hotel.images = updatedImages;
      hotel.rooms.roomType = updatedRoomType
      hotel.rooms.roomCapacity = updatedRoomCapacity;
      hotel.rooms.roomPrice = updatedRoomPrice;
      hotel.rooms.noOfRooms = updatedNoOfRooms;
      hotel.description = updatedDescription;
      return hotel.save()
      .then(result => {
        console.log('updated hotel');
        res.redirect('/admin/hotels');
      })
    })
    .catch(err => console.log(err));
  }

  //delete a hotel
  exports.postDeleteHotel = (req, res, next) => {
    const hotelId = req.body.hotelId;
    Hotel.findByIdAndRemove(hotelId)
    .then(result => {
      console.log('deleted hotel');
      res.redirect('/admin/hotels')
    })
    .catch(err => console.log(err));
  }