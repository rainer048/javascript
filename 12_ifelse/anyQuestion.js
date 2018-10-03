var login = prompt ("введите логин","");
if (login==null){
alert ('вход отменён');
}
else if (login == "Admin") 
{
	var pass= prompt ("введите пароль","");

	var check = (pass==null) ?
	'вход отменён': (pass == "1111") ? "welcome, дружище" :"Я вас не узнаю";
	
}
else {
alert ("Я вас не знаю!");
}
