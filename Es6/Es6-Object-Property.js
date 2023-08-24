// shorthand property
let Uname = "Vishal";
let Uage = 12;

let student = {
  Uname,
  Uage,
};

console.log(student);

// computed property

let key = "new_key";

function func() {
  return "Somevalues";
}

let obj = {
  sName: "Vishal",
  [key]: "Yes",
};

console.log(obj); //{sName: 'Faizan', new_key: 'Yes'}

let obj1 = {
  sName: "Vishal",
  [key + 2 + func()]: "Yes",
};

console.log(obj1); // {sName: 'Faizan', new_key2Somevalues: 'Yes'}

// method shorcut in objects
let obj2 = {
  func1() {
    return "Vishal";
  },
};

console.log(obj2);