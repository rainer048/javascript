var nn = +prompt("факториал какого числа хотите получить?",'');
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(nn) ); 
