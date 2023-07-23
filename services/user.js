module.exports.getAllUser = async (req, res, next) => {
    try {
        res.send({ success: true, message: "Get all users successfully!" });
    } catch (e) {
        res.send({ success: false, mess: "Error: " + e });
    }
};
