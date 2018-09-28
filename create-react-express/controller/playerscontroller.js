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
   findById: function(req, res) {
     console.log("Controller ID " + req.params.id);
     const name = JSON.stringify(req.params.id);
     db.Players
       .findOne({"Player": "" + req.params.id +""})
       .then(Player => {
        console.log("The data back from the DB", Player);
        res.json(Player)
       } )
       .catch(err => res.status(422).json(err));
   },
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
   update: function(req, res) {
    console.log("update function id", req.params.id);
     db.Players
       .findOneAndUpdate({ _id: req.params.id }, req.body)
       .then(dbPlayers => res.json(dbPlayers))
       .catch(err => res.status(422).json(err));
      
   },
  //  remove: function(req, res) {
  //    db.Players
  //      .findById({ _id: req.params.id })
  //      .then(dbArticle => dbArticle.remove())
  //      .then(dbArticle => res.json(dbArticle))
  //      .catch(err => res.status(422).json(err));
  //  },
   findByPosition: function(req, res){
    db.Players
    .findAll({ Position: "QB"})
    .sort({ date: -1 })
    .then(dbPlayers => res.json(dbPlayers))
    .catch(err => res.status(422).json(err));
    // .aggregate(
    //   [{$match: {Position: "QB"}}] .then(dbPlayers => res.json(dbPlayers))
    //   .catch(err => res.status(422).json(err)));
    },
    //we need to fix this app

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
