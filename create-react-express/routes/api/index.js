const router = require("express").Router();
const playerRoutes = require("./players");


// NYT routes
router.use("/api/allPlayers", playerRoutes);



module.exports = router;
