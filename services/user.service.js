module.exports.getAllUser = async (req, res, next) => {
    try {
        res.send({ success: true, message: "Get all users successfully!" });
    } catch (e) {
        res.send({ success: false, mess: "Error: " + e });
    }
};

module.exports.createUser = async (req, res, next) => {
    let body = req.body;
    await order
        .create({
            ...body,
        })
        .then((response) => {
            res.send({ success: true, data: response, mess: "Successfully!" });
        })
        .catch((e) => {
            res.json({
                status: false,
                message: e.message,
            });
        });
};
