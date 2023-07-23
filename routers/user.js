const router = require("express").Router();
const { getAllUser } = require("../controllers/user");

router.route("/").get(getAllUser);

module.exports = router;
