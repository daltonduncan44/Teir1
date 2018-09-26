const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const playersSchema = new Schema({
    Postition: { type: String, required: true },
    Player: { type: String, required: true },
    Teir: { type: INTERGER, required: true },
    Pr: { type: INTERGER, required: true }
  }, { _id: false });
  
  const Players = mongoose.model("Players", playersSchema);
  
  module.exports = Players;
 
 
 
 