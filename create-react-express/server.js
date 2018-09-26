

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const playerscontroller = require("./controller/playerscontroller");
const mongoose = require("mongoose");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fantasy"
);

//get mongoose documents
//return in API

app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
