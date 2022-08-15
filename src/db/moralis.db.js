const Moralis = require("moralis/node");

const config = require('config');
const credentials = config.get('Customer.config');

const moralisConnet = async() => {
    const serverUrl = credentials.MORALIS_APP_API;
    const appId = credentials.MORALIS_APP_ID;
    const masterKey = credentials.MORALIS_MASTER_KEY;
    await Moralis.start({ serverUrl, appId, masterKey });
    console.log("MoralisDB Connect 😄😄😄");
}

moralisConnet();