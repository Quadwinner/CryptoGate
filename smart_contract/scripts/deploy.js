const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await Transactions.deploy();

  // Wait for the transaction to be mined
  await transactionsContract.deployTransaction.wait();

  console.log("Transactions deployed to: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
