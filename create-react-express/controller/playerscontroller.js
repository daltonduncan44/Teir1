 const db = require("../models");

 // Defining methods for the articleController
 module.exports = {
   findAll: function(req, res) {
     db.players
       .find(req.query)
       .sort({ date: -1 })
       .then(dbPlayers => res.json(dbPlayers))
       .catch(err => res.status(422).json(err));
   },
   findById: function(req, res) {
     db.players
       .findById(req.params.id)
       .then(dbPlayers => res.json(dbPlayers))
       .catch(err => res.status(422).json(err));
   },
   create: function(req, res) {
     const article = {
       _id: req.body._id,
       title: req.body.headline.main,
       url: req.body.web_url
     };
     db.players
       .create(players)
       .then(dbPlayers => res.json(dbPlayers))
       .catch(err => res.status(422).json(err));
   },
   update: function(req, res) {
     db.players
       .findOneAndUpdate({ _id: req.params.id }, req.body)
       .then(dbArticle => res.json(dbArticle))
       .catch(err => res.status(422).json(err));
   },
   remove: function(req, res) {
     db.players
       .findById({ _id: req.params.id })
       .then(dbArticle => dbArticle.remove())
       .then(dbArticle => res.json(dbArticle))
       .catch(err => res.status(422).json(err));
   }
 };
