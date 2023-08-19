//- replace, 
// - replaceAll, 

const str = "hello i live i delhi, and these are big city";

console.log(str);

const str1 = str.replace("london","paris");
console.log(str1);//Hi its a bird, and its a big animal

/*
If you're seeing the error "TypeError: replaceAll is not a function", 
it is likely due to the method not implemented/supported by the browser version 
(or the Node.js version) that you're using.
*/

// NodeJs is not supporting replaceAll, here you can execute it using regex.
//for replaceAll u may test this in browser console
// const str = "hello i live in delhi";
// const str1 = str.replaceAll("london","paris");
// console.log(str1);