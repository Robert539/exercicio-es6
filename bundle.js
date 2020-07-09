"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var nomes = ["Dirceu", "João", "Pedro"];
var squareArr = arr.map(function (item, index) {
  return item * index;
});
console.log(squareArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
