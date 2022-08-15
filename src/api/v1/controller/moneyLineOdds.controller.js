const axios = require("axios");
const fs = require("fs");
const Moralis = require("moralis/node");
const { getOddsUsginGameIdBookmakerIdBetId } = require("../services/rapidAPI.service");


/* Get all Money Line odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 2);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneylineOdds", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            fs.writeFileSync('moneyLineOdds.json', JSON.stringify(response.data.response[0].bookmakers[0].bets), function (err) {
                if (err) throw err;
                console.log('Saved updated Data ');
            });
            return res.status(200).send({ status: "success", message: "Get Money Line Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line Qtr1 odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_Qtr1_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 19);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneylineQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr1 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line Qtr2 odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_Qtr2_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 84);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneylineQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr2 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line Qtr3 odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_Qtr3_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 81);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneylineQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr3 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line Qtr4 odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_Qtr4_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 82);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneylineQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line Qtr4 Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line 1st Half odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_1stHalf_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 18);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline1stHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line 1st Half Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

/* Get all Money Line 2nd Half odds Data of Games by Game Id And BookmakerId  */
exports.money_Line_2ndHalf_Odds_Data_Of_Single_Game = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 85);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline2ndHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var resData = response.data.response
            return res.status(200).send({ status: "success", message: "Get Money Line 2nd Half Odds Successfully.", count: response.data.results, data: resData });
        }else{
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}
