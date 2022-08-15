require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

const config = require('config');
const credentials = config.get('Customer.config');
const { specs } = require("./swagger/swagger.doc");

require("./db/moralis.db");

const PORT = process.env.PORT || credentials.PORT;

var corsOptions = {
    Origin: "http://localhost:*"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => {
    console.log("Server start : " + PORT);
});

app.set('view engine', 'ejs');
app.use("/api/live/", require("./api/v1/routes/oddEvenOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/racePoints.routes"));
app.use("/api/live/", require("./api/v1/routes/props.routes"));
app.use("/api/live/", require("./api/v1/routes/threewayMoneylineOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/moneyLineOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/spreadOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/overUnderOdds.routes"));
app.use("/api/live/", require("./api/v1/routes/liveGames.routes"));
app.use("/api/", require("./api/v1/routes/bets.routes"));

app.get('/', (req, res) => {
    res.render("index");    
});