const config = require('config');
const credentials = config.get('Customer');
const { Biconomy } = require("@biconomy/mexa");
const Web3 = require("web3");
const ethers = require("ethers");


const abi = require("./dexwinABI.json")
/* Register Dapp onto biconomy dashboard to get the x-api-key */
const providerUrl = 'https://rinkeby.infura.io/v3/' + credentials.infura.TOKEN;
const biconomy = new Biconomy(new Web3.providers.HttpProvider(providerUrl), { apiKey: credentials.biconomy.API_KEY, debug: true, contractAddresses: ["0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85"] });
var web3 = new Web3(biconomy);

try {
    biconomy.init().then(() => {
        console.log("Connect Biconomy");
        signSendTransactions();
    }).catch((err) => {
        console.log("Error: " + err);
    });
} catch (error) {
    console.log("Error: " + error);
}

const signSendTransactions = async() => {
    // Initialize Constants
    let userAddress = "0x01aF89212Ea60C9aa9a71D881F15555687f35070";
    let contract = new ethers.Contract("0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85", abi, biconomy.getSignatureEIP712(userAddress));
    let contractInterface = new ethers.utils.Interface(abi);

    // Create your target method signature.. here we are calling setQuote() method of our contract
    let { data } = await contract.populateTransaction.setQuote(newQuote);
    let provider = biconomy.getEthersProvider();

    // you can also use networkProvider created above
    let gasLimit = await provider.estimateGas({ to: "0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85", from: userAddress, data: data });
    console.log("Gas limit : ", gasLimit);

    let txParams = {
        data: data,
        to: "0x28775C65d1eBCDa3F77f3d5C71b9828749A3CA85",
        from: userAddress,
        gasLimit: gasLimit, // optional
        signatureType: "EIP712_SIGN"
    };

    // as ethers does not allow providing custom options while sending transaction
    // you can also use networkProvider created above               
    // signature will be taken by mexa using normal provider (metamask wallet etc) that you passed in Biconomy options  
    let tx = await provider.send("eth_sendTransaction", [txParams]);
    console.log("Transaction hash : ", tx);

    //event emitter methods
    provider.once(tx, (transaction) => {
        // Emitted when the transaction has been mined
        //show success message
        console.log(transaction);
        //do something with transaction hash
    });
}