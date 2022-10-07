const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const hotelRoute = require("./routes/hotelRoute")
const connectDB = require("./config/connectDB")


const app = express();
dotenv.config();
connectDB();

//middlewares
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute);
app.use(morgan("dev"));





app.get("/", (req, res) => {
    res.send("<h1>Welcome To Gamson Damsel Hotel Booking App</h1>");    
});




const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

