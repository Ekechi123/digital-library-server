const mongoose = require('mongoose');

// Define the member schema
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  }
});

// Create the model based on the schema
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;

