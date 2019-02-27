const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  name: String,
  city: String,
  description: String,
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  },
  duration: Number,
  rating: Number,
  reviews: Array,
  POI: [Object],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

