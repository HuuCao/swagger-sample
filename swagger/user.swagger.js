const pathUser = (tagName) => {
    return (module.exports = {
        "/user": {
            get: {
                summary: "Get all user & query user",
                tags: [tagName],
                operationId: "get",
                deprecated: false,
                produces: ["application/json"],
                parameters: [
                    {
                        name: "user_id",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "creator_id",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "role_id",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "code",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "name",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "phone",
                        in: "query",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                ],
                responses: {
                    200: {
                        description: "",
                    },
                },
                security: [],
            },
        },
        "/user/add": {
            post: {
                summary: "Create user",
                tags: [tagName],
                operationId: "create",
                deprecated: false,
                produces: ["application/json"],
                parameters: [
                    {
                        name: "Body",
                        in: "body",
                        required: false,
                        description: "",
                        schema: {
                            $ref: "#/definitions/adduser",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "",
                        headers: {},
                    },
                },
                security: [],
            },
        },
        "/user/update/{user_id}": {
            patch: {
                summary: "Update user",
                tags: [tagName],
                operationId: "Patchupdate",
                deprecated: false,
                produces: ["application/json"],
                parameters: [
                    {
                        name: "user_id",
                        in: "path",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                    {
                        name: "Body",
                        in: "body",
                        required: false,
                        description: "",
                        schema: {
                            $ref: "#/definitions/updateuser",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "",
                        headers: {},
                    },
                },
                security: [],
            },
        },
        "/user/delete/{user_id}": {
            delete: {
                summary: "Delete user",
                tags: [tagName],
                operationId: "delete",
                deprecated: false,
                produces: ["application/json"],
                parameters: [
                    {
                        name: "user_id",
                        in: "path",
                        required: false,
                        type: "integer",
                        format: "int32",
                        description: "",
                    },
                ],
                responses: {
                    200: {
                        description: "",
                        headers: {},
                    },
                },
                security: [],
            },
        },
    });
};

const defineUser = () => {
    return (module.exports = {
        adduser: {
            title: "adduser",
            example: {
                username: "HuuCao",
                password: "admin",
                mail: "caominhhuu2108@gmail.com",
                phone: "0798012416",
                first_name: "Huu",
                last_name: "Cao",
                age: 23,
                is_active: true,
            },
            type: "object",
            properties: {
                username: {
                    type: "string",
                },
                password: {
                    type: "string",
                },
                mail: {
                    type: "string",
                },
                phone: {
                    type: "string",
                },
                first_name: {
                    type: "string",
                },
                last_name: {
                    type: "string",
                },
                age: {
                    type: "integer",
                },
                is_active: {
                    type: "boolean",
                },
            },
            required: ["username", "password", "mail", "phone"],
        },
    });
};

module.exports = { pathUser, defineUser }
