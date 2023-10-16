// const tinderUser= {}
const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "ansh",
            lastname: "Raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}
// const obj3 = Object.assign({}, obj1, obj2) // {} -> this is target nd others are source whose value are transferred into the target this is not necessary if we write obj1 instead of {} then obj1 will be treated as target and vice-versa.

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user =[
    {
        id : 1,
        email : "anshambastha@gmail.com"
    },
    {
        id : 1,
        email : "anshambastha@gmail.com"
    },
    {
        id : 1,
        email : "anshambastha@gmail.com"
    },
]

console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename : "JS",
    price : "999",
    courseInstructor : "hitesh",
}
const {courseInstructor : instructor} = course
console.log(instructor);