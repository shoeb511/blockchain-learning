// import { network } from "hardhat";

// const { ethers } = await network.connect();

// const counter = await ethers.getContractAt(
//   "Counter",
//   "0x5FbDB2315678afecb367f032d93F642f64180aa3"
// );

// // Read the current counter value
// const count = await counter.getCount();

// console.log("Current counter value:", count.toString());

// await transaction.wait();

// const receipt = await transaction.wait();

// console.log("Transaction hash:", transaction.hash);
// console.log("Block number:", receipt?.blockNumber);
// console.log("Gas used:", receipt?.gasUsed.toString());


import { network } from "hardhat";

const { ethers } = await network.connect();

const counter = await ethers.getContractAt(
  "Counter",
  "0x5FbDB2315678afecb367f032d93F642f64180aa3"
);

console.log("Before increment:", (await counter.getCount()).toString());

const transaction = await counter.increment();

const receipt = await transaction.wait();

console.log("Transaction hash:", transaction.hash);
console.log("Block number:", receipt?.blockNumber);
console.log("Gas used:", receipt?.gasUsed.toString());

console.log("After increment:", (await counter.getCount()).toString());
