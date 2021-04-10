const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 =require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');

const provider = new HDWalletProvider(
    "anxiety silk more other sense anger first coast play ask weird exclude",
    "https://rinkeby.infura.io/v3/ab47d39a4140483d90e9587159364410"
);

const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('account', accounts[0]);
    // const balance = await web3.eth.getBalance(accounts[0]);
    // console.log('balance', balance);
    
    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({data :  '0x' +compiledFactory.evm.bytecode.object})
        .send({from: accounts[0],gas:'5000000'})
        .on('error', function(error){ console.log("err :" + error) })
        .on('transactionHash', function(transactionHash){ console.log("th : "+ transactionHash) })
        .on('receipt', function(receipt){
           console.log(receipt.contractAddress) // contains the new contract address
        })
    console.log('Contact deployed at - ', result.options.address);
    
};

deploy();

