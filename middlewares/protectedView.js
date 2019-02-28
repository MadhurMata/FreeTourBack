const protectedView = {
 notLoggedIn: (req, res, next) => {
   if (!req.session.currentUser) {
     res.status(401).json({
       error: 'Unauthorized'
      });
    } else {
      next();
   }
 },
 loggedIn: (req, res, next) => {
   if (req.session.currentUser) {
     next();
  } else {
    res.status(401).json({
      error: 'Unauthorized'
   })
 
  };
 }
} 

module.exports = protectedView