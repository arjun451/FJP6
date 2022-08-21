const fs = require('fs');



console.log("Before---------");
let contant = fs.readFileSync("request.js");
console.log(contant+" ");
console.log("After------");

//Now letes introduced callback
console.log("--------------Callback---------------");
console.log("Before---------");
fs.readFile("request.js",cb);
 function cb(error,data)
 {
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(data+"");
    }
 }
console.log("After------");