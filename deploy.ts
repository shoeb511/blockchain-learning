
import { network } from "hardhat";

const { ethers } = await network.connect();

const counter = await ethers.deployContract("Counter");

await counter.waitForDeployment();

console.log("Counter deployed to:", await counter.getAddress());

console.log(
  "Initial count:",
  (await counter.getCount()).toString()
);
