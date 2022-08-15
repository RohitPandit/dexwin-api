const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");

const config = require('config');
const credentials = config.get('Customer.config');
const { specs } = require("./swagger/swagger.doc");

require("./db/moralis.db");

app.listen(credentials.PORT, () => {
    console.log("Server start : " + credentials.PORT);
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get('/', (req, res) => {
    res.send("Hello World");
});