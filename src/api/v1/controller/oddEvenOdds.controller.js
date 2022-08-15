const axios = require("axios");
const fs = require("fs");
const Moralis = require("moralis/node");
const { getOddsUsginGameIdBookmakerIdBetId } = require("../services/rapidAPI.service")

exports.getEvenOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 35);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEven", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            var odds = response.data.response[0].bookmakers[0].bets.bets;
            return res.status(200).send({ status: "success", message: "Get Even/Odd Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getEvenOddOverTime = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 12);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEvenOverTime", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var odds = response.data.response[0].bookmakers[0].bets.bets;
            fs.writeFileSync('odd.json', JSON.stringify(response.data.response[0].bookmakers[0].bets), function (err) {
                if (err) throw err;
                console.log('Saved updated Data ');
            });
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Even/Odd OverTime Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getEvenOddFirstHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 13);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEven1stHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Even/Odd 1st Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getEvenOddSecondHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 59);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("oddEven2ndHalf", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Even/Odd 2nd Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getEvenOddHome = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 36);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("homeOddEven", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Even/Odd Home Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getEvenOddAway = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 37);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {

            const Matches = Moralis.Object.extend("Matches");
            const query = new Moralis.Query(Matches);
            query.equalTo("matchid", Number(req.query.gameid));
            const results = await query.find();
            if (results.length > 0) {
                const queryResult = await query.first();
                queryResult.set("awayOddEven", response.data.response[0].bookmakers[0].bets);
                queryResult.save()
            }

            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Even/Odd Home Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddFirstHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 60);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Even/Odd 1st Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddSecondHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 61);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Even/Odd 2nd Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddFirstQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 73);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Odd/Even 1st-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddSecondQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 74);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Odd/Even 2nd-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddThirdQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 75);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Odd/Even 3rd-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getAwayEvenOddFourthQuarter = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 76);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Away Odd/Even 4th-Qtr odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getHomeEvenOddFirstHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 64);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Home Even/Odd 1st Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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

exports.getHomeEvenOddSecondHalf = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 65);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Home Even/Odd 2nd Half Odds Successfully.", count: response.data.results, data: data });
        } else {
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