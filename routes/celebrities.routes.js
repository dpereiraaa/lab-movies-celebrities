const router = require("express").Router();
const Celebrity = require("./../models/celebrity.model");

/* GET home page */
router.get("/celebrities", (req, res) => { //ROUTE -> this is the url
  Celebrity.find()
  .then((celebritiesFound) => {
      res.render('celebrities/celebrities', {celebritiesFound: celebritiesFound})
  })
  .catch((err) => {
      console.log(err)
  });

});

//PAGE TO CREATE A NEW CELEBRITY
router.get("/celebrities/create", (req, res) => {
    res.render('celebrities/new-celebrity');
  });

//GETTING INFORMATION TO CREATE A NEW CELEBRITY
router.post("/celebrities/create", (req, res) => {
const { name, occupation, catchPhrase } = req.body;

Celebrity.create({ name, occupation, catchPhrase })
    .then((newCelebrity) => {
        res.redirect(`/celebrities`);
    })
    .catch( (err) => console.log(err));

});




module.exports = router;
