-//Use the correct Array method to sort the elements_fruits array alphabetically.

let elements_fruits =["Banana", "Orange", "Apple", "Kiwi"];
elements_fruits.sort(function (a, b) {
  return a.length - b.length;
});
console.log(elements_fruits);