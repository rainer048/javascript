"use strict";

var salaries = {
    'Anton': 100,
    'Misha': 300,
    'Dima': 2500
};

var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}

alert( sum );
