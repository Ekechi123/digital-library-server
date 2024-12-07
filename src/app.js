const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const staffRoutes = require('./routes/staffRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use('/api/books', bookRoutes); // Mount book routes
app.use('/api/members', memberRoutes); // Mount member routes
app.use('/api/staff', staffRoutes); // Mount staff routes
app.use(errorMiddleware); // Error handling middleware

module.exports = app;

