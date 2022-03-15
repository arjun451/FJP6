//copy index.html file from module1 to a new folder inside module2 having name html.
let fs= require("fs");
let path= require("path");

let source_path=path.join(__dirname,"..","..","..","1.Module","index.html")  ;

let distination_path = path.join(__dirname,"..","..","index.html");

fs.copyFileSync(source_path,distination_path);