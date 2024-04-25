const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../NFT.env') })
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/NFT.sol/MyNFT.json")
console.log(JSON.stringify(contract.abi))
