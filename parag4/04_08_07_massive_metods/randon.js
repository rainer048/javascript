var arr = [];
for (var i = 2; i <=100; i++) arr.push(i);

function compareRandom(a, b) {
  return Math.random() - 0.5;
}
arr.sort(compareRandom);
alert( arr );
