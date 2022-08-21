//task 1. take the inpute from console
let fs = require('fs');
let path = require('path');
let folderPath = process.argv[2];
 
let extension={
    Viedo:[".mp4"],
    Audio:[".mp3"],
    Image:[".png",".jpg",".gif",".jpeg"],
    Document:[".pdf",".zip",".doc",".mk",".xlsx"],
    Software:[".exe"],

};

// task 2. Read the folder;
if(fs.existsSync(folderPath))
{
  let folgerContain = fs.readdirSync(folderPath);
//   console.log(folgerContain);
     for(let i=0; i<folgerContain.length;i++)
     {
        let ext = path.extname(folgerContain[i]);
        console.log(ext+" ");
     }

}
else
{
    console.log("Given path  "+folderPath+ "  is invalied");
}

function 