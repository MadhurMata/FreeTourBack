const express = require("express");
const User = require("../models/user");
const Tour = require("../models/tour");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  // validar que estas login
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
    // find User con el id de la session
    User.findById({ _id: ObjectId(_id) })
      // res.send('respond with a resource');
      .then(data => res.json({ data, message: "user found" }).status(200))
      .catch(next);
    //  if not 401
  } else {
    res.status(401).json({
      error: "not-found"
    });
  }
});

router.get("/profile", (req, res, next) => {
  const creator = req.session.currentUser._id;
  Tour.find({ creator })
    .then(tour => {
      res.json(tour).status(200);
    })
    .catch(next);
});

router.put('/profile/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { user } = req.body;
console.log(req.body)
    User.findByIdAndUpdate(id, user, { new: true })
    .then((data)=>{
      req.session.currentUser = user;
      res.json(data).status(200)
      console.log('User Edited!!')
  
    })
    .catch(next)
  });




// router.post('/me/favorite', (req, res) => {
//   // mirar si ya lo tienes en favorites
//   console.log ('hola')
//   const { id } = req.params;
//   User.findById(id)
//   if(User.find({ favorites: ObjectId(_id) }) === id
//   ){
//     return 'it is in favorites'
//   }

//   // sino añadir

// });

module.exports = router;
