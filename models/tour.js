const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;


const tourSchema = new Schema({
  creator: { type: ObjectId, ref: 'User'},
  name: String,
  image: String,
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
  comments: [Object],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

