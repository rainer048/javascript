var many = +prompt("до какого числа хотите вывести суммы?", '');
var choise = +prompt("каким вариантом считать сумму первых 100 чисел? 1-цикл, 2- рекурсия, 3-сумма арифметической прогрессии", '');

switch (choise) {
case 1:
    {
        function sumTo(n) {
            var result = 0;
            for (var i = 1; i <= n; i++) {
                result += i;
            }
            return result;
        }
        
        alert(sumTo(many));
    }
    break;

case 2:
    {
        function sumTo(n) {
            if (n == 1)
                return 1;
            return n + sumTo(n - 1);
        }

        alert(sumTo(many));
        break;
    }

case 3:
    {
        function sumTo(n) {
            return n * (n + 1) / 2;
        }
        
        alert(sumTo(many));
    }

default:
    alert("надо было выбирать из предложенных вариантов");
}
