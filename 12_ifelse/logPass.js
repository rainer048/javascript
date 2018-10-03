var login = prompt ("введите логин","");
if (login==null){
alert ('вход отменён');
}
else if (login == "Admin") 
{
	var pass= prompt ("введите пароль","");

	if (pass==null){
	alert ('вход отменён');
	}
	else if (pass == "1111"){ 
	alert ("welcome, дружище");
	}
	else {
	alert("Я вас не узнаю");
	}
}
else {
alert ("Я вас не знаю!");
}
