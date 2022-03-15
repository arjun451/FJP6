//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

//first of all reuired the libarary file which are required
const { clear } = require("console");
let fs = require("fs");
let pa= require("path");


// Create a folder unorginsed folder for better visulitation
if(!fs.existsSync("unorginsed"))
fs.mkdirSync("unorginsed");
let arr =["audio","video","image","software","documents","application","other"];
let fileName = ["abc","mongo","srvg","qwer"];
let fileExt=[".mp3",".mp4",".jpg",".exe",".pdf",".txt",".exe"]



let filepath=pa.join(__dirname,"unorginsed");
for(let i=0;i<arr.length;i++)
{
    let fodpath=pa.join(filepath,arr[i]);
    if(!fs.existsSync(fodpath))
    fs.mkdirSync(fodpath);
   
    for(let j=0;j<fileName.length;j++)
    {
        let finalpath=pa.join(fodpath,fileName[j]+fileExt[i]);
        fs.writeFileSync(finalpath,"");
    }
}
