const router = require("express").Router();
const playerscontroller = require("../../controller/playerscontroller");

// Matches with "/
router.route("/")
  .get(playerscontroller.findAll)
  // .post(playerscontroller.create);

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(playerscontroller.findById)
//   .put(playerscontroller.update)
//   .delete(playerscontroller.remove);
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
module.exports = router;
