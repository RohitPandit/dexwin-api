const config = require('config');
const credentials = config.get('Customer');
const { Biconomy } = require("@biconomy/mexa");
const Web3 = require("web3");
const ethers = require("ethers");
const abi = require("./dexwinABI.json");

let sigUtil = require("eth-sig-util"); // additional dependency 


// Initialize constants
const providerUrl = 'https://rinkeby.infura.io/v3/' + credentials.infura.TOKEN;
const biconomy = new Biconomy(new Web3.providers.HttpProvider(providerUrl), { apiKey: credentials.biconomy.API_KEY, debug: true, contractAddresses: ["0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85"] });
var web3 = new Web3(biconomy);
let contract = new web3.eth.Contract(abi, "0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85");

let userAddress = "0x01aF89212Ea60C9aa9a71D881F15555687f35070";
let privateKey = "0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85";

let txParams = {
    "from": userAddress,
    //gasLimit is optional or can be pre estimated for your method call before passing
    "gasLimit": web3.utils.toHex(300000),
    "to": "0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85",
    //Call your target method. here we are calling setQuote() method of our contract
    "data": contract.methods.balanceOf("0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85").encodeABI(),
};

const func = async() => {
    biconomy.init();
    const signedTx = await web3.eth.accounts.signTransaction(txParams, `0x${privateKey}`);
    const forwardData = await biconomy.getForwardRequestAndMessageToSign(signedTx.rawTransaction);
    const signature = sigUtil.signTypedMessage(new Buffer.from(privateKey, 'hex'),
        { data: forwardData.eip712Format }, 'V4');
    // forwardData has personalSignatureFormat available as well. Check the next tab on the right

    let rawTransaction = signedTx.rawTransaction;

    let data = {
        signature: signature,
        forwardRequest: forwardData.request,
        rawTransaction: rawTransaction,
        signatureType: biconomy.EIP712_SIGN
    };

    // Get the transaction Hash using the Event Emitter returned
    web3.eth.sendSignedTransaction(data)
        .on('transactionHash', (hash) => {
            console.log(`Transaction hash is ${hash}`)
        })
        .once('confirmation', (confirmation, receipt) => {
            console.log(`Transaction Confirmed.`);
            console.log(receipt);
            //do Something
        });

    /********* OR *********/

    // Use any one of the methods below to check for transaction confirmation
    // USING PROMISE
    let receipt = await web3.eth.sendSignedTransaction(data, (error, txHash) => {
        if (error) {
            return console.error(error);
        }
        console.log(txHash);
    });
}

func();