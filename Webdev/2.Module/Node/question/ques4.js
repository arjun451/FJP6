// read content of unorganised folder and make  an array which has extension name of each file
let fs= require("fs");
let path = require("path");
let folder_path=path.join(__dirname,"..","orginsed");

// console.log(folder_path);


let contant= fs.readdirSync(folder_path);
//console.log(contant);

let extArra=[];
for(let i=0;i<contant.length;i++)
{
    let filename=contant[i];
    let extName=path.extname(filename);
    extArra.push(extName);
}

//print the output
console.log(extArra);