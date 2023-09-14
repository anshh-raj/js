 const name="ansh"
 const age=18

 //console.log(name+age+"value"); //old way for concatenation
 
 console.log(`Hello my name is ${name} and my age is ${age}`);

 const gameName= new String('ansh-raj-ambastha') // another way to declare a string same as before

 console.log(gameName[0])
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('h'));

 const newString= gameName.substring(0,4); //can't use -ve values
 console.log(newString);

 const anotherString=gameName.slice(-7,4) //can use -ve values
 console.log(anotherString);

 const newStringOne="    ansh   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url="https://ansh.com/ansh%20raj"
 console.log(url.replace("%20","-"))

 console.log(url.includes("ansh"));

 console.log(gameName.split("-"));
