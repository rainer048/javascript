var min = +prompt('введите нижний предел' , '');
var max = +prompt('введите верхний предел' , '');

function randomInteger(min , max) {
    var res = min + Math.random()*(max - min);
    return res.toFixed(0);
}
alert (randomInteger(min , max)) ;
