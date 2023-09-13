// Primitive

// 7 types : String, Number, Boolean, Undefinied, Null, Symbol, BigInt

//Reference types(non primitive)

//array, objects, functions

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber= 3456736782787320748764932878704n //n at last state that it is a bigint
console.log(typeof bigNumber);

const heros=["shaktiman","naagraj","doga"];
let myobj={
    name:"ansh",
    age:18,
}

const myFunction=function(){
    console.log("hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                       MEMORY

// stack memory(primitive datatype), heap memory(non-primitive datatype)

let myname="ansh"
let mynewname=myname
mynewname="raj"
console.log(myname)
console.log(mynewname);

let userone={
    email:"ansh@gmail.com",
    upi:"user@paytm"
}
let usertwo=userone
usertwo.email="raj@gmail.com"
console.log(userone.email);
console.log(usertwo.email);