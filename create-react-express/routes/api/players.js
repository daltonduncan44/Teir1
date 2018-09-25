const router = require("express").Router();
const playerscontroller = require("../../controllers/playerscontroller");

// Matches with "/api/articles"
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
