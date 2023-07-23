const { getAllUser } = require("../services/user");

module.exports.getAllUser = async (req, res, next) => {
    try {
        getAllUser(req, res, next);
    } catch (e) {
        return res.send({ success: false, mess: "Error: " + e });
    }
};
