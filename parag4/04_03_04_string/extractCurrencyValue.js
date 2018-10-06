var price = prompt('Введите стоимость, начиная со значка $ ' , '');
function extractCurrencyValue(str) {
    var newstr = +str.slice(1);
	  return(newstr);
}
alert(extractCurrencyValue(price));
