require('dotenv').config();
// require('imers/promises/setTimeout');
// import { setTimeout } from "t";

const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.AlchemyProvider('sepolia', API_KEY)

const contract = require("../artifacts/contracts/MY_NFT.sol/MyNFT.json");
// console.log(JSON.stringify(contract.abi));

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0xBd449890efA68C213a9B55E61F97d98F3ded7e18'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)
  

// Get the NFT Metadata IPFS URL
let tokenUri = "https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmaGdA72EHqj5umM4XyuUksp3VYgWWhfwKJdzmsMbXAk8x/9.json";
// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//  }
// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`)
}

// js = ["2.json"];
// js = ["1.json"];
// for (let i = 1; i < 10; i++) {
//     
// }

// for (let i = 1; i < 10; i++) {
    
mintNFT()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
    
    // const yourFunction = async () => {
    //     await setTimeout(10000);
    //     console.log("Waited 5s");
        
    //     // await setTimeout(5000);
    //     // console.log("Waited an additional 5s");
    // };
    // wait(10000);
    
// }
