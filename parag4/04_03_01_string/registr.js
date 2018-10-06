var word = prompt('введите слово из строчных букв' , '');
var letter = prompt('введите порядковый номер буквы, который нужно перевести в верхний регистр' , '');
function ucFirst(str , num) {
    if(!str) return str;

    return str.slice(0, (num-1) ) + str[num-1].toUpperCase() + str.slice(num) ;
}
alert ( ucFirst(word , letter) );
