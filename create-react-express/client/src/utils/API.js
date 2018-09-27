import axios from "axios";


export default {
  // Gets articles from the  API
  getPlayers: function() {
    return axios.get("/api/allPlayers");
  },
  // Gets all saved articles
  getSavedPlayers: function() {
    return axios.get("/api/savedPlayers");
  },
  // Deletes the saved article with the given id
  deletePlayer: function(id) {
    return axios.delete("/api/players/" + id);
  },
  // Saves an article to the database
  savePlayer: function(articleData) {
    return axios.post("/api/players", articleData);
  },
  getQuarterbacks: function() {
    return axios.get("/api/allPlayers/qb");
  },
  getRunning: function() {
    return axios.get("/api/allPlayers/rb");
  },
  getRecever: function() {
    return axios.get("/api/allPlayers/wr");
  },
  getDEF: function() {
    return axios.get("/api/allPlayers/def");
  },

  getTE: function() {
    return axios.get("/api/allPlayers/te");
  },
  getAll: function() {
    return axios.get("/api/allPlayers/");
  },

  getPlayer: function(_id) 
  {
    console.log("id in api", _id)
    return axios.get("/api/allPlayers/" + _id);
  },
 
 };