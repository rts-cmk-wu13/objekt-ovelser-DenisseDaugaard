// -----------Opgave 1--------------

let person = {
    firstname:"Denisse", 
    lastname:"Daugaard",
    age:29,
    nationality:"Mexican",
    pet:"hund",
    petname:"Loui"
}

console.log("opgave 1a",person.firstname);
console.log("opgave 1a",person.lastname);
console.log("opgave 1a",person.age);
console.log("opgave 1a",person.nationality);
console.log("opgave 1a",person.pet);
console.log("opgave 1a",person.petname);

console.log("opgave 1b",person["firstname"]);
console.log("opgave 1b",person["lastname"]);
console.log("opgave 1b",person["age"]);
console.log("opgave 1b",person["nationality"]);
console.log("opgave 1b",person["pet"]);
console.log("opgave 1b",person["petname"]);


//---------------------- Opgave 2-----------------


let person2 = {
    firstname:"Denisse", 
    lastname:"Daugaard",
    age:29,
    nationality:"Mexican",
    hobbies:["singing", "dancing", "embroiding"],
    pet:{
        type: "hund",
        petname:"Loui"
    }
}

 person2.hobbies.forEach(function(hobby){
    console.log("opgave 2a", hobby);
});

console.log("opgave 2b", person2.pet.type);
console.log("opgave 2b", person2.pet.petname);

//-------------Opgave 3-----------------------

