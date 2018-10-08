function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val < a || val > b) {
            arr.splice(i--, 1);
        }
    }
}
var arr = [];
for (var i = 2; i <=100; i++) arr.push(i);
var down = +prompt('Введите нижнюю границу интервала удаления' , '');
var up = +prompt('Введите верхнюю границу интервала удаления' , '');
filterRangeInPlace(arr, down, up);
alert( arr ); 
