import Web3 from 'web3'; 
//rip off the metamask's provider and create our version of web3 with it.
// const provider = window.ethereum;
// provider.enable(); 

// Window object is not available when Next js server side renderring is used
// Hence this approach does not work for us.
// const web3 = new Web3(window.web3.currentProvider);

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // We are in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}else{
    // We are on the server *OR* the user is not running Metamask
    const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/ab47d39a4140483d90e9587159364410");
    web3 = new Web3(provider);
}

export default web3;