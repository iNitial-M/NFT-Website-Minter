const hre = require("hardhat");

async function main() {
  const XHuntNFT = await hre.ethers.getContractFactory("XHuntNFT");
  const xHuntNFT = await XHunt.deploy();

  await xHuntNFT.deployed();

  console.log("XHuntNFT deployed to:", xHuntNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
