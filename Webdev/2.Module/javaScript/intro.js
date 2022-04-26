//printing in javaScript
console.log("Welcom in JavaScripty")

//variables in JS
let num = 10;
console.log(num);
let char = 'a';
console.log(char);
let string = 'I am string';
console.log(string);


//loop
// for(let i=1;i<10;i++)
// {
//     console.log(i);
// }
let i=10;
while(i>0)
{
    console.log(i);
    i= i-1;
}

// Is prime
let y=10,T=1;
for(let i=2;i<y;i++)
{
    if(y%i==0)
    {
        T=-1;
    }
}
if(T==-1)
console.log("Not prime");
else
console.log("Prime");