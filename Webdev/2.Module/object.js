// Empty object
let obj = {};
console.log(obj);

//object with element
let obj1={
    name:"Arjun",
    "Age":25,
    Mob:988554532
}
//console.log(obj1);
let CapAmea={
    name:"stive",
    age:67,
    friends:["Natasha","Toney","Thor","Halk"],
    Address:{
        city:"Going",
        State:"America"
    },
    saysHay:function()
    {
        console.log("says hay CapAmerica")
    }
}
//console.log(CapAmea);
//Acces the name of CapAmea
console.log(CapAmea.name);
//Acces the name of frinds
console.log(CapAmea.friends);
// Acces the Addres
console.log(CapAmea.Address.State);
// call the Function
CapAmea.saysHay();