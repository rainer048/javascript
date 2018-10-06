var choise = +prompt('До какого числа вычислять последовательность Фибонначи' , '') ;
function fibBinet(n) {
    var F = ( 1 + Math.sqrt(5) ) / 2;
    return Math.round((Math.pow(F , n) / (Math.sqrt(5));
}
alert(fibBinet(choise));
