/**
* @type import('hardhat/config').HardhatUserConfig
*/
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './NFT.env') })
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "matic",
   networks: {
      hardhat: {},
      matic: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}