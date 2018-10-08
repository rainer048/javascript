function filterRange(arr, a, b) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }

  return result;
}

var arr = [5, 4, 3, 8, 0];
var a = +prompt('Введите нижнее значение интервала поиска' , '');
var b = +prompt('Введите верхнее значение интервала поиска' , '');
var filtered = filterRange(arr, a, b);
alert( filtered );
