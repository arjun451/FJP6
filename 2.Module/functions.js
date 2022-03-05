
//Function

function sayshello()
{
    console.log("Says hello from function");
}


// fuction call
sayshello();
//function with parameter
function sum(num1,num2)
{
    let add = num1+num2;
    console.log('Sum of these num is '+add);
}
sum(12,3);

// Multipcation of number
function multipcations(num1,num2)
{
    return num1*num2;
}
console.log(multipcations(3,5));


// Function are First class citizen in js
let a= function sum(num1,num2)
{
    return num1+num2;
}
console.log(a(45,5));
