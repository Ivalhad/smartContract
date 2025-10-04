import { network } from "hardhat";

async function main() {
  // Cara baru untuk mendapatkan 'ethers' di Hardhat 3,
  // sesuai dengan file contoh test/Counter.ts di proyek Anda.
  const { ethers } = await network.connect();

  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  console.log("Deploying HelloWorld contract...");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.waitForDeployment();

  console.log(`HelloWorld contract deployed to: ${helloWorld.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});