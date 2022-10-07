const { createHotel, getHotel,deleteHotel } = require("../controllers/hotelcontrollers")
const { Router } = require("express")

const router = Router();

router.post("/addhotel", createHotel)

router.route("/hotels").get(getHotel)
router.delete("/delete/:id", deleteHotel)

module.exports = router