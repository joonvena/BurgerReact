var express = require('express');
var router = express.Router();
const Restaurant = require('../models/restaurant');
var auth = require("../controllers/AuthController.js");

/* GET restaurant listing. */
router.get('/', function(req, res, next) {
  Restaurant.find({}, function(err, restaurants) {
    res.json(restaurants);
  });
});

/* GET restaurant by id */
router.get('/:id', function(req, res, next) {
  Restaurant.findById({_id: req.params.id}, function(err, restaurant) {
    res.json(restaurant);
  });
});

router.get('/:id/edit', function(req, res, next) {
  Restaurant.findById({_id: req.params.id}, function(err, restaurant) {
    res.json(restaurant);
  });
});

/* POST add new restaurant */
router.post('/', function(req, res, next) {
  Restaurant.create(req.body).then(function(err, restaurant) {
    res.redirect('/');
  }).catch(next);
});

router.post('/etsi', function(req, res) {
  Restaurant.find({ $or: [{nimi: {$regex : "^" + req.body.haku}}, {kaupunki: {$regex : "^" + req.body.haku}}, {osoite: {$regex : "^" + req.body.haku}}]}, function(err, restaurants) {
      console.log(req.body.haku);
      res.json(restaurants);
});
});

/* PUT update restaurant by id */
router.post('/:id', function(req, res, next) {
  Restaurant.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, restaurant) {
    res.send('Restaurant updated');
  }).catch(next);
});


/* DELETE remove restaurant by id */
router.delete('/:id', function(req, res, next) {
  Restaurant.deleteOne({_id: req.params.id}, function(err, restaurant) {
    res.send('Restaurant deleted');
  }).catch(next);
});


/* ROUTES FOR COMMENTS */

/* PUT add comment to restaurant */
router.post('/:id/kommentit', function(req, res, next) {
  Restaurant.findByIdAndUpdate({_id: req.params.id }, {$push: {"kommentit": req.body}}, function(err, comment) {
  res.send('Comment added')
  });
});

router.post('/:id/kommentit/:id', function(req, res, next) {
  Restaurant.findByIdAndUpdate({_id: req.params.id }, {$push: {"kommentit": req.body}}, function(err, comment) {
  res.redirect('/ravintolat/');
  });
});


/* GET get all comments by restaurantd id */
router.get('/:id/kommentit', function(req, res, next){
  Restaurant.find({_id: req.params.id}, 'kommentit', function(err, comments){
    res.json(comments);
  });
});

/* GET get comments by id */
router.get('/:id/kommentit/:idcomments', function(req, res, next){
  Restaurant.findById({_id: req.params.id}, {"kommentit": { $elemMatch: { "_id" : req.params.idcomments}}}, function(err, comment){
    res.json(comment);
  });
});

/* DELETE delete comments by id */
router.post('/:id/kommentit/:idcomments', function(req, res, next){
  Restaurant.findByIdAndUpdate({_id: req.params.id}, {$pull: {"kommentit": {_id:  req.params.idcomments}}}, function(err, comment){
    res.json(comment);
  });
});

router.post('/:id', function(req, res, next) {
  Restaurant.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, restaurant) {
    res.redirect('/ravintolat');
  }).catch(next);
});

router.post('/:id/kommentit/:idcomments/vastaus', function(req, res, next){
  Restaurant.findByIdAndUpdate({_id: req.params.id}, { '$push': {'kommentit.0.ravintolanvastaus': req.body.ravintolanvastaus }},  function(err, comment){
    console.log(req.body.ravintolanvastaus);
    res.redirect('/ravintolat');
  });
});


/* PUT edit comment by id */
/* router.put('/:id/kommentit/:idcomments', function(req, res, next){
  Restaurant.findByIdAndUpdate({_id: req.params.id}, {"kommentit": { $elemMatch: { "_id" : req.params.idcomments}}}, function(err, comment){
    res.json('Kommentti päivitetty');
  });
}); */

module.exports = router;
