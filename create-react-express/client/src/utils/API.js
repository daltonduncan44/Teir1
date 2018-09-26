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
  }
};
