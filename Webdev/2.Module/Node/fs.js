let fs = require("fs");
console.log(fs);
//
let path = require("path");
let filepath = path.join(__dirname,"file.txt");


//now creat the a file
fs.writeFileSync(filepath,"I am a txt file");   // creat a new file and write the contant
//fs.writeFileSync(filepath,"Again in txt file write"); // Over writes in a extistes file

//R-read file
console.log(fs.readFileSync(filepath,'utf-8'));


//U-update file
fs.appendFileSync(filepath,"\nhello i am a code");
console.log(fs.readFileSync(filepath,"utf-8"));


//D-delete file
fs.unlinkSync(filepath);