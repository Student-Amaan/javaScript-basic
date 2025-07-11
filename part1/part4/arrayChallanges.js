let firstTea = ["green tea","black tea", "brown tea","oolang tea"]

let amantea = firstTea[0]

console.log(amantea);

let cities = [ "london","Tokyo", "Paris", "New York"];

let favoriteCity = cities[3];
console.log(favoriteCity);

let teaType = ["herbal tea", "white tea","masala tea"];
teaType[2] = "jasmin tea";
console.log(teaType);

let citiesVisited = ["Mumbi","Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha","early grey"];

let lastorder = teaOrders.pop();
console.log(lastorder);
console.log(teaOrders); 

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTea = popularTeas;
console.log(softCopyTea);

let topCities = ["Berlin", "Singapore", "New York"];
let hardcopy = [...topCities];
topCities.pop();
console.log(hardcopy);

let europeanCities = ["paris","Rom"];
let asianCities = ["Tokyo","Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

let teaMenu = ["masala chai","oolong tea", "green tea", "early grey"];
 
let menuLength = [teaMenu.length];
console.log(menuLength);

let cityBucketList = ["kyoto","London","Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);