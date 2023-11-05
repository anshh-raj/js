for (let index = 0; index < 10; index++) {
    console.log(index);   
}

let myArr=["batman","flash","ironman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}