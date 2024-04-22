require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/router/auth-router");
const connectDB = require("./src/utils/mongo");

const corsOptions = {
    origin: true,
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router);

connectDB().then(() => {
    app.listen(3001, () =>{ 
        console.log(`Server running on port 3001`)
    })
});