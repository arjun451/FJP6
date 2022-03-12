// Intro to node js
let cp=require('child_process'); 
//console.log(cp);


// Open Calucature
// cp.execFileSync("calc");
// cp.execFileSync("code");

let contant = cp.execSync("node test.js");
console.log(""+contant);



