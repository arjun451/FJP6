//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File


let fs=require("fs");
let path = require("path");


let folder_path = path.join(__dirname,"..","orginsed");
let content=fs.readdirSync(folder_path);
//console.log(content);


for(let i=0;i<content.length;i++)
{
    let v=path.extname(content[i]);
    if(v=='.mp3')
     console.log("Audio File");
    else if(v=='.mp4')
    console.log("Viedo File");
    else if(v=='.jpg')
    console.log("Image File");
    else if(v=='.pdf')
    console.log("Documents File");
    else if(v=='.txt')
    console.log("Text File");
    else if(v=='.doc')
    console.log("Words Press File");
    else if(v=='.exe')
    console.log("Machine code file");
    else
    console.log(v+" is not valied type of file");


}

