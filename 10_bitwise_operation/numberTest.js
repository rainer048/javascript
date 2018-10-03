function isInteger(num) {
	return(num^0) === num; /*Для проверки равенства без преобразования типов используются операторы строгого равенства === (тройное равно) и !==.*/
}
alert (isInteger(3) );
alert (isInteger(43.245));
alert (isInteger(-2335.22224));
