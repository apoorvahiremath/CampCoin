const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// console.log(solc.compile(JSON.stringify(input)));

setTimeout(()=>{ 
    // console.log(output.contracts);
    fs.ensureDirSync(buildPath);
    const contracts = output.contracts['Campaign.sol'];
    for(let contract of Object.keys(contracts)){
        fs.outputJSONSync(
            path.resolve(buildPath, contract+'.json'),
            contracts[contract]
        )
    }
 }, 10000);
 