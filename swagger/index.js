const { pathUser, defineUser } = require("./user.swagger.js");
const { pathAdmin, defineAdmin } = require("./admin.swagger.js");

const swaggerJson = () => {
    return {
        swagger: "2.0",
        info: {
            version: "1.0",
            title: "Swagger API Tour",
            description: "Documentation for tour API",
            contact: {
                name: "HuuCao",
                email: "caominhhuu2108@gmail.com",
                url: "heyotrip.com",
            },
        },
        host: "localhost:3000",
        basePath: "/api",
        securityDefinitions: {},
        schemes: ["http", "https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        paths: {
            ...pathUser("User"),
            ...pathAdmin("Admin"),
        },
        definitions: {
            ...defineUser(),
            ...defineAdmin(),
        },
    };
};

module.exports = {
    swaggerJson,
};
