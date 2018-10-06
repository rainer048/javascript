
var array = [1 ,568, 'глазаЗакрываются', 0] ;
function find(array, value) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }

    return -1;
}
alert(find(array,0));
