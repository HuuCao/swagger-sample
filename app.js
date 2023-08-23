const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUi = require("swagger-ui-express");
const { swaggerJson } = require("./swagger/index");
require("dotenv").config();

const router = require("./routers/index");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJson()));

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
