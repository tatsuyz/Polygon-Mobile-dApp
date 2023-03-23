//truffle-config.js
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

var ALCHEMY_API_KEY = "SlVl-v90HqpUpfRFiWFucRzsJphlcjPA";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
    },
    matic: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: "https://polygon-mumbai.g.alchemy.com/v2/SlVl-v90HqpUpfRFiWFucRzsJphlcjPA",
          chainId: 80001,
        }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
    },
  },
  contracts_directory: "./contracts",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  db: {
    enabled: false,
  },
};