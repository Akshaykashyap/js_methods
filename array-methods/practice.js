// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
// map
pizzas.map(value => value+" "+"dish")
//
pizzas.forEach(value => {
  console.log(value+2)
})
//
pizzas.filter(value => value=length)
//
pizzas.splice(1, 0, "fish");
//

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];
//
cuts.map(val => val+" "+"cuts")
//
cuts.forEach(val => val+"" 2)
//
cuts.filter(val => val<cuts.length)
//
cuts.splice(2,1,"hello")
//

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
//
numbers.map(function value(val){
  return val+2;
}
// 
numbers.filter(fun => fun<numbers.length)
//
numbers.splice(2, 1, "welcome")

