const app = require('./app');
const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/digital-library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


