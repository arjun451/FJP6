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
        // console.log(ext+" -->"+GivefolderName(ext));
        let DestfolderPath  = path.join(__dirname ,GivefolderName(ext));
        if(!fs.existsSync(DestfolderPath))
        {
          fs.mkdirSync(DestfolderPath);
        }
        let src = path.join(folderPath,folgerContain[i]);
        DestfolderPath = path.join(DestfolderPath,folgerContain[i]);
        MoveFileIncorrectFolder(src,DestfolderPath);
     }

}
else
{
    console.log("Given path  "+folderPath+ "  is invalied");
}

function GivefolderName(ext)
{
   for(let key in extension)
   {
    let extArray = extension[key];
    for(let i=0;i< extArray.length;i++)
    {
      if(extArray[i]==ext)
      {
        return key;
      }
    }
   }
   return 'Others'
}
function MoveFileIncorrectFolder(src,dst)
{
     
      fs.copyFileSync(src,dst);
      fs.unlinkSync(src);
    // console.log("sourcePath ---> "+src);
    // console.log("DestPath ---> "+dst);
    
}