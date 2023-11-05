if(2=="2"){
    console.log("executed first");
}
if(2==="2"){
    //this will check the datatype also
    console.log("executed second");
}

//same there is !== for strict checking

const balance = 700

if(balance<500){
    console.log("balance is less than 500");
}
else if(balance<750){
    console.log("balance is less than 750");
}
else{
    console.log("balance is greater than 750");
}