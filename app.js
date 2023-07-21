const express = require("express");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swagger = require("./swagger");
const openApiSpecification = swagger.openapiSpecification();
require('dotenv').config()

// Route
app.get('/users', (req, res) => {
    console.log("Get user is successfully!");
  });

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpecification));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
