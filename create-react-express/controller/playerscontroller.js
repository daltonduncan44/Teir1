 const db = require("../models");

 // Defining methods for the articleController
 module.exports = {
   findAll: function(req, res) {
     db.Players
       .find(req.query)
       .sort({ date: -1 })
       .then(dbPlayers => res.json(dbPlayers))
       .catch(err => res.status(422).json(err));
   },
  //  findById: function(req, res) {
  //    db.Players
  //      .findById(req.params.id)
  //      .then(dbPlayers => res.json(dbPlayers))
  //      .catch(err => res.status(422).json(err));
  //  },
  //  create: function(req, res) {
  //    const article = {
  //      _id: req.body._id,
  //      title: req.body.headline.main,
  //      url: req.body.web_url
  //    };
  //    db.Players
  //      .create(players)
  //      .then(dbPlayers => res.json(dbPlayers))
  //      .catch(err => res.status(422).json(err));
  //  },
  //  update: function(req, res) {
  //    db.Players
  //      .findOneAndUpdate({ _id: req.params.id }, req.body)
  //      .then(dbArticle => res.json(dbArticle))
  //      .catch(err => res.status(422).json(err));
  //  },
  //  remove: function(req, res) {
  //    db.Players
  //      .findById({ _id: req.params.id })
  //      .then(dbArticle => dbArticle.remove())
  //      .then(dbArticle => res.json(dbArticle))
  //      .catch(err => res.status(422).json(err));
  //  },
   findByPosition: function(req, res){
    db.Players
    .find({ Position: "QB"})
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    // .aggregate(
    //   [{$match: {Position: "QB"}}] .then(dbPlayers => res.json(dbPlayers))
    //   .catch(err => res.status(422).json(err)));
    },

    findRB: function(req,res){
      db.Players
      .find({ Position: "RB"})
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    },
    findWR: function(req,res){
      db.Players
      .find({ Position: "WR"})
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    },
    findDEF: function(req,res){
      db.Players
      .find({ Position:{$in:["D/S", "K"]
    
      }
    
    })
    
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    },

    findTE: function(req,res){
      db.Players
      .find({ Position: "TE"})
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    },

 };
