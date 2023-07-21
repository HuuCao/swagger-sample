const swaggerJsdoc = require('swagger-jsdoc');

exports.openapiSpecification = function () {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Micro service',
                version: '1.0.0',
            },
        },
        servers: ['http://localhost:3000'],
        apis: ['./routes/*.js'],
    };

    return swaggerJsdoc(options);
};
