const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // validar que estas login
  if (req.session.currentUser) {
    res.json(req.session.currentUser);
    //  if not 401
  } else {
    res.status(401).json({
      error: 'not-found'
    })
  }
  // find User con el id de la session
  User.findById({ _id: ObjectId(_id) })
  // res.send('respond with a resource');
  .then((data) => res.json({data, message: 'user found'}).status(200))
  .catch(next)
});

// router.post('me/favorite') => {
//   // si ya lo tienes en favorites
//   // sino añadir 



// });

module.exports = router;
