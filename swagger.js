const swaggerJsdoc = require("swagger-jsdoc");

exports.openapiSpecification = function () {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Demo Swagger",
                version: "1.0.0",
            },
        },
        servers: [
            {
                apis: "http://localhost:3000/api",
            },
        ],
        apis: ["./routers/*.js"],
    };

    return swaggerJsdoc(options);
};
