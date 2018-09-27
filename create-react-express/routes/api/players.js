const router = require("express").Router();
const playerscontroller = require("../../controller/playerscontroller");

// Matches with "/
router.route("/")
  .get(playerscontroller.findAll)
  // .post(playerscontroller.create);

// Matches with "/api/allPlayers/:id"
router
  .route("/:id")
  .get(playerscontroller.findById)
 
router
  .route("/qb")
  .get(playerscontroller.findByPosition)
  // .put(playerscontroller.update)
  router
  .route("/rb")
  .get(playerscontroller.findRB)
  router
  .route("/wr")
  .get(playerscontroller.findWR)
  router
  .route("/def")
  .get(playerscontroller.findDEF)
  router
  .route("/te")
  .get(playerscontroller.findTE)
  // Matches with "/api/allPlayers/:id"
  // router
  // .route("/:id")
  // .get(playerscontroller.findById)
  
  
module.exports = router;
