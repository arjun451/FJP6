//move a file

//First of all include all requires
let fs= require("fs");
let path = require("path");


//Define the path of source and distination
let souce_path =path.join(__dirname,"..","this_file_to_move.doc") ;
let dist_path= path.join(__dirname,"..","orginsed","this_file_to_move.doc");


//console.log(souce_path);
//console.log(dist_path);
//copy the file
fs.copyFileSync(souce_path,dist_path);

//now delete the file from wher it copy
fs.unlinkSync(souce_path);