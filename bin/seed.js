// const mongoose = require('mongoose');
// const Tour = require('../models/tour');

// const tours = [
//   {name: "Street art", city: "Barcelona", description: "Tour that shows the street art of barcelona city center", duration: 2, rating: 5}
// ]

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//   .then(() => {
//     console.log('connected to db');
//     return Tour.create(tours);
//   }).then((data) => {
//     console.log('created data', data);
//   }).then(() => {
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });

const mongoose = require('mongoose');
const Tour = require('../models/tour');

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const seed = [{ name: "Street art", image: "https://www.odysseytraveller.com/app/uploads/2017/11/Barcelona-Spain-iStock-619257048.jpg", city: "Barcelona", description: "Tour that shows the street art of barcelona city center", duration: 2, rating: 5 }];

Tour.create(seed)
  .then(data => console.log('Data added', data))
  .then(() => mongoose.connection.close())
  .catch(error => console.log('Couldn\'t add files', error));