const Hotel = require('../models/hotelSchema')

const createHotel = (req, res) => {
  const newHotel = new Hotel({
    hotelname: req.body.hotelname,
    location: req.body.location,
    category: req.body.category,
    facilities: req.body.facilities,
    numOfRoomsinahotel: req.body.numOfRoomsinahotel,
    image:req.body.image,
    address: req.body.address,
    contact: req.body.contact,
  })
  newHotel.save()
  res.status(200).json(newHotel)
}

//getting a hotel
const getHotel = async (req, res) => {
  const hotel = await Hotel.find()
  res.status(200).json(hotel)
}

async function deleteHotel(req, res) {
  await Hotel.findByIdAndDelete(req.params.id);
  res.json({
    message:"hotel removed"
  })
}







module.exports = { createHotel, getHotel,deleteHotel }
