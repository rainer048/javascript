var styles = ['БЛюз' , 'джаз'];
styles[styles.length] = 'Рок-н-ролл';  //styles.push("Рок-н-Ролл");
styles[styles.length-2]  = 'классика';
alert(styles.shift());
styles.unshift('rap) ;
