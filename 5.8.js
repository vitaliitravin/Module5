let myMap = new Map();
myMap.set('Vitalii', 26);
myMap.set('Pasha', 18);
myMap.set('Dasha', 23);

console.log(myMap.keys())
console.log(myMap.values())

for (let name of myMap.keys()){
  console.log('Ключ - ' + name)
}
for(let age of myMap.values()){
  console.log('значение - ' + age)
}