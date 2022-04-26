// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs= require("fs");
let path = require("path");

// for outpute is readable make new folder orginsed
if(!fs.existsSync("orginsed"));
fs.mkdirSync("orginsed");


// let arr=["audio","video","image","software","document","applications","other"];

// // fist of all find the path
// let filepathe= path.join(__dirname,"orginsed");
// for(let i=0;i<arr.length;i++)
// {
//     let Fpath = path.join(filepathe,arr[i]);
//   if(!fs.existsSync())
//   fs.mkdir(Fpath);
// }