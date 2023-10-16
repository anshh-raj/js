//singleton
// Object.create

//object literals

const mySym= Symbol("key1")

const Jsuser = {
    name : "Ansh",
    "full name": "Ansh Raj",
    [mySym] : "myKey1",
    age : 18,
    loc : "Delhi",
    email : "anshambastha@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday" , "saturday", "sunday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
// console.log(Jsuser.full name);  this will give an error
console.log(Jsuser[mySym]);

Jsuser.email = "anshambastha@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email= "anshambastha@microsoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS User");
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting());

Jsuser.greetingtTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(Jsuser.greetingtTwo());