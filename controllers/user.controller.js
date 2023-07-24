const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../services/user.service");

module.exports.getAllUser = async (req, res, next) => {
    try {
        getAllUser(req, res, next);
    } catch (e) {
        return res.send({ success: false, mess: "Error: " + e });
    }
};

module.exports.createUser = async (req, res, next) => {
    try {
        createUser(req, res, next);
    } catch (e) {
        return res.send({ success: false, mess: "Error: " + e });
    }
};
