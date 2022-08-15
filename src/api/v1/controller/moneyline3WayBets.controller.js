const abi = require("../../../../MoneyLineABI.json");
const Web3 = require('web3');
const oddfile = require("../../../../moneyLineOdds3WayData.json");

const odds = oddfile[0].values[0].odd * 100;
const type = oddfile[0].values[0].value;
const contractAddress = "0x3c9506D7528CC53381Fb9B1937105C2596896c05";
const url = 'https://polygon-mumbai.g.alchemy.com/v2/IayB8LT29SKY7sh6GjOeV8Tc9SntXOHu';
const web3 = new Web3(url);;
const privKey = "0x1941513d63965c36deed9900ac8449315645848df2a5eea731ec590f14d005fa";
const account = web3.eth.accounts.wallet.add(privKey);
contract = new web3.eth.Contract(abi, contractAddress)

const data1 = contract.methods.CreateBet(["1", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "12", "1658988719", "1658988719", "20000", "20000"]).encodeABI()
const data2 = contract.methods.placebet(1, 521, 0, type, odds).encodeABI();

exports.createBet = async (req, res) => {
    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: account.address,
            to: contractAddress,
            data: data1,
            gas: '500000'
        },
        privKey // private key variable
    );
    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    if (createReceipt.transactionHash !== null && createReceipt.transactionHash !== undefined && createReceipt.transactionHash !== "") {
        res.status(200).send({ status: "success", message: "Create Bet Successfully. Hash : " + createReceipt.transactionHash, userAccount: account.address })
    } else {
        res.status(404).send({ status: "error", message: "Something Went Wrong." })
    }
}

exports.placeBet = async (req, res) => {
    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: account.address,
            to: contractAddress,
            data: data2,
            gas: '500000'
        },
        privKey // private key variable
    );
    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    if (createReceipt.transactionHash !== null && createReceipt.transactionHash !== undefined && createReceipt.transactionHash !== "") {
        res.status(200).send({ status: "success", message: "Place Bet Successfully. Hash : " + createReceipt.transactionHash, userAccount: account.address })
    } else {
        res.status(404).send({ status: "error", message: "Something Went Wrong." })
    }
}
