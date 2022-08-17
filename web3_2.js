const { Biconomy } = require("@biconomy/mexa");
const Web3 = require("web3");
const Web3EthContract = require("web3-eth-contract");
const config = require('config');
const credentials = config.get('Customer');

const providerUrl = 'https://rinkeby.infura.io/v3/' + credentials.infura.TOKEN;
Web3EthContract.setProvider(providerUrl);


// New Credentials
const newContractAbi = require("./QuoteABI.json")
const newContractAddress = '0xDb7DDB7206FD2B56839d32de4Df16E6C10630f23';
const newOwenerAddress = '0x01aF89212Ea60C9aa9a71D881F15555687f35070';
const myContract = new Web3EthContract(newContractAbi, newContractAddress);

async function setQuote() {
	try {
		var result = await myContract.methods.setQuote("0.00000000000000001").send({from: newOwenerAddress});
		console.log(result)
		getQuote();
	} catch (error) {
		console.log("Error: " + error);
	}
}

async function getQuote() {
	var result =  await myContract.methods.getQuote().call({from: newOwenerAddress});
	console.log(result)
}

setQuote();