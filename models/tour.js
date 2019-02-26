const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: String,
  city: String,
  description: String,
  location: {
    latitude: Number,
    longitude: Number
  },
  duration: Number,
  rating: Number,
  reviews: [],
  POI: [],
});

const Tour = mongoose.model('User', tourSchema);

module.exports = Tour;