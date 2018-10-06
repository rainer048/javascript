var string = prompt('ведите долольно длинную строку' ,'') ;
function truncate(str , maxlength) {
     if(str.length > maxlength){
        var newstr = str.slice(0 , maxlength) ;
        alert(newstr + '...')  ;
     }
}
alert (truncate(string, 10));
