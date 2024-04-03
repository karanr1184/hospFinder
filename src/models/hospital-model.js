const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String, 
        require: true,
    },
    address: {
        type: String, 
        require: true,
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    doctorsCount: {
        type: String, 
        require: true
    },
    doctors: [
        {
          name: {
            type: String,
            required: true
          },
          specialization: {
            type: String,
            required: true
          }
        }
      ]
});

const Hospital = new mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;