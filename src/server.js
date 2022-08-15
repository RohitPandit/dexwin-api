const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

const config = require('config');
const credentials = config.get('Customer.config');
const { specs } = require("./swagger/swagger.doc");

require("./db/moralis.db");

var corsOptions = {
    Origin: "http://localhost:*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(credentials.PORT, () => {
    console.log("Server start : " + credentials.PORT);
});

app.use("/api/live/", require("./api/v1/routes/oddEvenOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/racePoints.routes"));
app.use("/api/live/", require("./api/v1/routes/props.routes"));

app.get('/', (req, res) => {
    res.send("Hello World");
});