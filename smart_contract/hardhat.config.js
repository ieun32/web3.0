// https://eth-sepolia.g.alchemy.com/v2/LwcG9huQm-7GM0GzjneTrCfCteCkoFV-

//to build the smart contract
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.0",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/LwcG9huQm-7GM0GzjneTrCfCteCkoFV-",
      accounts: [`83be537c46fd8af28e02cc4e6b915d086cceff4081b6f274584ef8d486fad87a`]
    }
  }
}