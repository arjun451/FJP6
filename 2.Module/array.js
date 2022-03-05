//Empty array;
let ar  = [];
console.log(ar);
 

// Array wieth element
let ar1 = [1,3,54,"hello i am an array element",true,4.5,.000354];

ar1[0]="Zero index";

console.log(ar1)


//array method
// 1.push add element in last of array
ar1.push("add new element");
console.log(ar1);

//2. pop removed the last element 
ar1.pop();
console.log(ar1);


//3. Shift  removed the first element of the array
ar1.shift();
console.log(ar1);

// 4. unshift  add an element at the begien of the array
ar1.unshift("arjun");
console.log(ar1);

//5. length print the length of the array
console.log(ar1.length)

