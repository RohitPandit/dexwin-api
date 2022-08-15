require("dotenv").config();
const axios = require("axios");
const Moralis = require("moralis/node");
const fs = require('fs');
const { getOddsUsginGameIdBookmakerIdBetId } = require("../services/rapidAPI.service")

exports.getThreeWayOdds = async (req, res) => {
    console.log("Fun call");
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 1);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOdds", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;

            var odds = JSON.stringify(response.data.response[0].bookmakers[0].bets);
            fs.writeFileSync('moneyLineOdds3WayData.json', odds, function (err) {
                if (err) throw err;
                console.log('Saved updated Data ');
            });
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultFirstQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 14);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOddsQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 1st-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultSecondQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 38);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOddsQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 2nd-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultThirdQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 39);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOddsQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 3rd-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultFourthQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 40);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOddsQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 4th-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultFirstHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 8);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOdds1stHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 1st-Half odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}

exports.getThreeWayResultSecondHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 30);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("moneyline3waysOdds2ndHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Money Line 3 Way 2nd -half odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if(Number(error.response.status) == 429){
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        }else{
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    })
}