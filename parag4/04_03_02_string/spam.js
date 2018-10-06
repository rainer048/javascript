 var spam = prompt('введите сообщение-спам' , '');
function checkSpam(str) {
      var newStr = str.toLowerCase();
      if ( ~newStr.indexOf("xxx") || ~newStr.indexOf("viagra"))
          alert("это сообщение содержит спам")
}
alert(checkSpam(str));
