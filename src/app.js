// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const staffRoutes = require('./routes/staff');  // Corrected import

// Initialize the app
const app = express();

// Middlewares
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(bodyParser.json());  // Parse JSON request bodies

// Setup routes
app.use('/api/staff', staffRoutes);  // Example route

// Export the app
module.exports = app;
