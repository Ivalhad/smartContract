// scripts/deploy.ts

async function main() {
  // Menggunakan require("hardhat") adalah cara paling andal 
  // untuk mendapatkan 'ethers' di dalam skrip tanpa error TypeScript.
  const { ethers } = require("hardhat");

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