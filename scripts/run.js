const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  let total = await nftContract.getTotalNFTsMinted();
  console.log("Total minted:", total.toNumber());

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  total = await nftContract.getTotalNFTsMinted();
  console.log("Total minted:", total.toNumber());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
