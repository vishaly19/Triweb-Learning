const str = "hello.\n there is sunny day";
// console.log(str);

const tmpltStr = `hello.
there is sunny day`;
console.log(tmpltStr);

console.log("*******************");
const atmosphere = "sunny day";
const str1 = 'hello.\n there is "'+atmosphere+'" today';
// console.log(str1);
const tmpltEmbdStr = `hello.
there "${atmosphere}" today`;
console.log(tmpltEmbdStr);