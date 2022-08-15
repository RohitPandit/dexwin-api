require("dotenv").config();
const axios = require("axios");
const Moralis = require("moralis/node");
const { getOddsUsginGameIdBookmakerIdBetId } = require("../services/rapidAPI.service")

exports.getSpreadOdds = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 3);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOdds", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread Odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultFirstHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 10);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOdds1stHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 1st-Half odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultSecondHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 49);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOdds2ndHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 2nd -half odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultFirstQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 17);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOddsQtr1", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 1st-Qtr odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultSecondQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 11);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOddsQtr2", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 2nd-Qtr odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultThirdQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 32);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOddsQtr3", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 3rd-Qtr odds Successfully.", count: response.data.results, data: data });
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

exports.getSpreadResultFourthQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 33);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("spreadOddsQtr4", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Spread 4th-Qtr odds Successfully.", count: response.data.results, data: data });
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