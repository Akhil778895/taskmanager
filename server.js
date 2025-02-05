require("dotenv").config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());    // to read the user data in json format

const userRoutes = require("./routes/userRoutes");

const corsOptions = {
    origin : "http://localhost:5173/",
    methods : "GET,POST,PUT, DELETE, PATCH",
    Credentials : true
};
app.use(cors(corsOptions));

app.use("/api/auth", userRoutes);

const connectDB = require("./config/db")
connectDB().then(() => {
    app.listen(3000);
})


