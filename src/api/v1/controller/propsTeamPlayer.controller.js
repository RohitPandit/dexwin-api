require("dotenv").config();
const axios = require("axios");
const { getTeamStatistics , getPlayerAssist } = require("../services/rapidAPI.service");


exports.getTeamProps = async (req, res) => {
    let option = await getTeamStatistics(req.query.id, req.query.season);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Props Successfully.", count: response.data.results, data: data });
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


exports.playerAssist = async(req,res)=>{
    let option = await getPlayerAssist(req.query.id, req.query.season);
    axios.request(option).then(async(response) => {
        if (response.data.response.length > 0) {
            var data = response.data.response;
            return res.status(200).send({ status: "success", message: "Get Props Successfully.", count: response.data.results, data: data });
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
