var x = 5025;
var y = 625;
var z = 452;

if (x > y) {
  console.log("x is greater than y");
  if (x > z) {
    console.log("x is greater than all");
  } else {
    console.log("z is greater than all");
  }
} else {
  console.log("y is greater than x");
  if (y > z) {
    console.log("y is grater than all");
  } else {
    console.log("z is greater than all");
  }
}