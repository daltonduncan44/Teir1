const router = require("express").Router();
const playerRoutes = require("./players");


// NYT routes
router.use("/articles", playerRoutes);



module.exports = router;
