const axios = require("axios");
const fs = require("fs");
const Moralis = require("moralis/node");
const { getOddsUsginGameIdBookmakerIdBetId } = require("../services/rapidAPI.service")

exports.getRaceTo12PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 77);
    axios.request(option).then(async (response) => {
        console.log()
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 12 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo25PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 78);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 25 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo45PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 79);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 45 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo20PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 83);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 20 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo10PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 89);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 10 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo50PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 90);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 50 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo40PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 102);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 40 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}

exports.getRaceTo30PointOdd = async (req, res) => {
    let option = await getOddsUsginGameIdBookmakerIdBetId(req.query.gameid, req.query.bookmakerid, 103);
    axios.request(option).then(async (response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Race 30 Points Odds Successfully.", count: response.data.results, data: data });
        } else {
            return res.status(404).send({ status: "error", message: "No Data Found" });
        }
    }).catch((error) => {
        if (Number(error.response.status) == 429) {
            return res.status(429).send({ status: "error", message: "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider" });
        } else {
            return res.status(500).send({ status: "error", message: "Server Error" });
        }
    });
}