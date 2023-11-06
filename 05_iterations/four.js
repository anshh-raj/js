const myObj={
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObj) {
    console.log(key);
}
for (const key in myObj) {
    console.log(myObj[key]);
}

const programming =["js","cpp","ruby","python"]
for (const key in programming) {
    console.log(programming[key]);
}

//for in can't be used on maps