// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //here semi-colon is necessary to end the function

( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('ansh');