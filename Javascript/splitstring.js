const cities = String("London,spain , los angeles, france, dubai");
const cityArr = cities.split(',');

console.log(cityArr);

cityArr.forEach((city)=>{
    console.log("my fav city ",city);
});