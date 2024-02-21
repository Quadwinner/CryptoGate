require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/4981dd8983b044448d783f82de58948c`,
      accounts: ["1fe8a68d2587904c9d2b44d2aa603c297dea2bcfdbf80a0dbb03820d4216667d"]
    }
  }
};
