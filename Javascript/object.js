let obj = {name:"vishal", address:"India", mobile:54554}


// console.log(obj.email); //undefined

obj.alternateMobile = null;

console.log(obj.alternateMobile);


//.(dot) notation
console.log("Dot notation",obj.mobile);
//Bracket notation
console.log("Bracket notation",obj['mobile']);


const x = "123";
obj[x] = "hi"
console.log("X= ",obj[x])

console.log(obj)


console.log("hello people")

let obj1 = new Object()
obj1.name = "Vishal";
obj1.address = "Paris";
obj1.mobile = 9877668;

console.log(obj1)