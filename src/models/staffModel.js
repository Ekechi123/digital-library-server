const mongoose = require('mongoose');

// Define the schema for staff
const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true
  },
  dateJoined: {
    type: Date,
    default: Date.now
  }
});

// Create the model for staff using the schema
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;

