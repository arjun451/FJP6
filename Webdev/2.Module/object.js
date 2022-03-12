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


// Add a key in the object
CapAmea.Movies=['Civial war','Averanger','EndGame'];
console.log(CapAmea);


//Delete a key from the object
delete CapAmea.Movies;
console.log(CapAmea);


//Modify the value of a key
CapAmea.age=199;
console.log(CapAmea.age);

//Second method to acces the a key
console.log(CapAmea["Address"]["State"]);