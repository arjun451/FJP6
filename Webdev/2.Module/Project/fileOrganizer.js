//Taking inpute
let fs=require("fs");
let path = require("path");


//let floderpth = process.argv[2];
let folderpath=  process.argv[2];
// console.log(folderpath);



//check if path is valied or not
let fileexist = fs.existsSync(folderpath);

//creating an object for complete the task 3
let fileExtansion={
  Viedo:[".mp4",".mkv"],
  Audio:[".mp3"],
  Document:[".pdf",".txt",".zip",".doc",".xlsx"],
  Image:[".jpg",".gif",".jpeg",".png"],
  Software:[".exe"]
};

//creating a function inpute is file extansion and output is folder name



if(fileexist)
{
  //Read the folder
  let files = fs.readdirSync(folderpath);
   for(let i=0;i<files.length;i++)
   {
     let exta = path.extname(files[i]);
     let folderName = GiveFolderName(exta);
     let orgfopath=path.join(__dirname,folderName);
     let exets=fs.existsSync(orgfopath);
      if(exets)
      {
       moveFile(folderpath,orgfopath,files[i]);
      }
      else
      {
        fs.mkdirSync(orgfopath);
        moveFile(folderpath,orgfopath,files[i]);
      }
       
   }
}
else
{
    console.log("Please enter a valied path!!!");
}

function GiveFolderName(ext)
{
  for(let key in fileExtansion)
  {
    let extArr=fileExtansion[key];
    for(let i=0;i<extArr.length;i++)
    {
      if(extArr[i]==ext)
      return key;
    }
  }
  return "Others";
}
function moveFile(folderpath,orgfopath,files)
{
  let sorce = path.join(folderpath,files);
  let dest = path.join(orgfopath,files);
  fs.copyFileSync(sorce,dest);
 fs.unlinkSync(sorce);
}
