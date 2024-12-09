const express = require('express');
const bookRoutes = require('./routes/bookRoutes');  // Routes for books
const memberRoutes = require('./routes/memberRoutes');  // Routes for members
const staffRoutes = require('./routes/staffRoutes');  // Routes for staff
const errorMiddleware = require('./middleware/errorMiddleware');  // Error handling middleware

const app = express();

// Middleware to parse JSON bodies for all incoming requests
app.use(express.json());  // This is for parsing JSON payloads from incoming requests

// Mount routes for each resource type
app.use('/api/books', bookRoutes);  // Book routes
app.use('/api/members', memberRoutes);  // Member routes
app.use('/api/staff', staffRoutes);  // Staff routes

// Error handling middleware should be added at the end of route handling
app.use(errorMiddleware);  // Global error handler

module.exports = app;
