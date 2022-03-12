//"C:\Users\Lenovo\Desktop\FJP6\Webdev\2.Module\Node\path.js"
let path = require("path");

//console.log(path);

//Extansion name and basename
let extansionName=path.extname("C:\Users\Lenovo\Desktop\FJP6\Webdev\2.Module\Node\path.js");
console.log(extansionName);


//baseName
let  b=path.basename("C:\Users\Lenovo\Desktop\FJP6\Webdev\2.Module\Node\path.js");
console.log(b);
console.log(__dirname);
console.log(__filename);