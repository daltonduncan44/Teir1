const router = require("express").Router();
const playerscontroller = require("../../controller/playerscontroller");

// Matches with "/
router.route("/")
  .get(playerscontroller.findAll)
  .post(playerscontroller.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(playerscontroller.findById)
  .put(playerscontroller.update)
  .delete(playerscontroller.remove);

module.exports = router;
