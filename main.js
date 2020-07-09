const arr = [1, 2, 3, 4, 5, 6];

const nomes = ["Dirceu", "João", "Pedro"];

const squareArr = arr.map(function (item, index) {
  return item * index;
});

console.log(squareArr);

const sum = arr.reduce(function (total, next) {
  return total + next;
});

const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function (item) {
  return item === 4;
});

console.log(find);
