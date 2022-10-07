const mongoose=require("mongoose")
const { string } = require("yup")


const hotelSchema = mongoose.Schema({
    hotelname: {
        type: String,
        required: true,
        unique:true
    },
    location: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
},
    facilities: {
        type: Array,
        required: true,
       
},
    numOfRoomsinahotel: {
        type: Number,
        required:true
    },
    Address: {
        gps: String,
        box: String
} ,
    contact: {
        phone: String,
        email: String
}

}, {
    timestamps: true
}
)

const Hotel = mongoose.model("hotel", hotelSchema)
module.exports = Hotel