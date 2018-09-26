const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const playersSchema = new Schema({
    Position: { type: String, required: true },
    Player: { type: String, required: true },
    Teir: { type: Number, required: true },
    Pr: { type: Number, required: true }
  }, { _id: false });
  
  const Players = mongoose.model("Players", playersSchema);
  
  module.exports = Players;
 
 
 
 