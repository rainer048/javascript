var n= +prompt(' до какого числа ищем все простые числа?' , '');
function eratosthenes(num){
	var arr = [];

	for (var i = 2; i <= num; i++) arr.push(i);

	for (var a = 1; a < arr.length; a++) {
		var one = arr[a-1];
		for (var b = a; b < arr.length; b++) {
			if(arr[b] % one == 0) delete arr[b];
		}
	}

	var sumPrimitiveNum = 0;

	for (var e = 0; e < arr.length; e++) {
		if(arr[e] !== undefined) sumPrimitiveNum +=arr[e];
	}
	alert(arr);
	return sumPrimitiveNum;
}
console.log(eratosthenes(n));

alert (eratosthenes(n));
