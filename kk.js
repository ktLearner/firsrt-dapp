const fs = require('fs');

// Data to be written to the JSON file
const img = ['Untitled.jpeg', 'al1.jpeg', 'al2.jpeg', 'al3.jpeg', 'al4.jpeg', 'al5.jpeg', 'al6.jpeg', 'al7.jpeg', 'al8.png', 'al9.jpeg', 'al10.jpeg', 'al11.jpeg', 'al12.jpeg'] 
https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmUwfqnDCQ4aSmVm7Mnkn1oyQCmz6iy2yrComuqrEJPWZs/

for (let i = 0; i < img.length; i++) {
  const jsonData = 
  {
    "attributes" : [ {
      "trait_type" : "species",
      "value" : "unknown"
    }, {
      "trait_type" : "city",
      "value" : "krituza"
    } ],
    "description" : "no one can describe",
    "image" : "https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmUwfqnDCQ4aSmVm7Mnkn1oyQCmz6iy2yrComuqrEJPWZs/"+img[i],
    "name" : img[i]

}

const jsonString = JSON.stringify(jsonData, null, 2); // The second argument is for pretty printing (optional)
const filePath = img[i][2]+'.json';
fs.writeFileSync(filePath, jsonString, 'utf-8');
console.log(`JSON data has been written to ${filePath}`);
}



// Convert the JavaScript object to a JSON string

// Define the file path where you want to save the JSON file

// Write the JSON string to the file

