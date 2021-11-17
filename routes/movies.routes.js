const router = require("express").Router();
const Movie = require("./../models/Movie.model");


//PAGE TO CREATE A NEW CELEBRITY
router.get("/movies/create", (req, res) => {
  res.render('movies/new-movie');
});



module.exports = router;
