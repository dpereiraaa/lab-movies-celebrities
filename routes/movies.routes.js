const router = require("express").Router();
const Celebrity = require("../models/celebrity.model");
const Movie = require("./../models/Movie.model");


router.get("/movies", (req, res) => { //ROUTE -> this is the url
  Movie.find()
  .then((moviesFound) => {
      res.render('movies/movies', {moviesFound: moviesFound})
      console.log('moviesFound :>> ', moviesFound);
  })
  .catch((err) => {
      console.log(err)
  });

});


//PAGE TO CREATE A NEW MOVIE
router.get("/movies/create", (req, res) => {
  Celebrity.find()
  .then((celebritiesFound) => {
    res.render('movies/new-movie', {celebritiesFound: celebritiesFound});
    console.log(celebritiesFound)
  }).catch((err) => {
    console.log(err);
  });
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;
  
  Movie.create({ title, genre, plot, cast })
      .then((newMovie) => {
          res.redirect(`/movies`);
      })
      .catch( (err) => console.log(err));
  
  });



module.exports = router;
