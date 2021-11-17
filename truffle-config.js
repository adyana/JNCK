require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

//  const mnemonic = process.env.SECRET.trim();

//const mnemonic = process.env.SECRET;

const mnemonic = "cf5e3908b21826d58c04a19fe4c46b77de1603b6f250769ae84f90d50bc02872";
const BSCSCAN_API = "RNTT161HQP57T6A445HIY9H8IPC8W6T152"

module.exports = {
  networks: {
//    development: {
//      host: "127.0.0.1",     // Localhost (default: none)
//      port: 8545,            // Standard BSC port (default: none)
//      network_id: "*",       // Any network (default: none)
//    },
    
    testnet: {
     provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

//    bsc: {
//      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
//      network_id: 56,
//      confirmations: 10,
//      timeoutBlocks: 200,
//      skipDryRun: true
//    },
  },
  
  compilers: {
    solc: {
      version: '^0.8.3',
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    
    // bscscan: process.env.BSCSCAN_API.trim()
    
        bscscan: BSCSCAN_API
  }
};
