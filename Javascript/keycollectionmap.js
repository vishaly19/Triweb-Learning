let newMap = new Map()
newMap.set("name","vishal")

console.log(newMap);//Map(1) { 'name' => 'vishal' }

newMap.set("address","London");
console.log(newMap);//Map(2) { 'name' => 'Vishal', 'address' => 'London' }

newMap.set("mobile",4545454545)
console.log(newMap);//Map(3) {
//     'name' => 'Vishal',
//     'address' => 'London',
//     'mobile' => 4545454545
//   }

console.log("Number of Element in Map = ",newMap.size);

const studentName = newMap.get('name');
console.log("Name from Map is ",studentName);

newMap.set(1,"First");
console.log(newMap);

let valOf1 = newMap.get(1);
console.log("Val of 1 is ",valOf1);