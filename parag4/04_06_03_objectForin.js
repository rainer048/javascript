'use strict';

var salaries = {
    'Anton': 100,
    'Misha': 300,
    'Dima': 2500
};
var max = 0;
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
  }
}
alert( max || 'нет сотрудников' );
