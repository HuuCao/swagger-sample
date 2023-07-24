const router = require("express").Router();
const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

router.route("/").get(getAllUser);
router.route("/create").post(createUser);
// router.route("/update/:id").patch(updateUser);
// router.route("/delete/:id").delete(deleteUser);

module.exports = router;
