function validate() {
var name = document.myform.username.value;
var pass = document.myform.pword.value;

//makes the username at least 2 charecters
if(name === "" && pass === ""){
	window.alert("The user name and password is empty");
}
else if(name === ""){
	window.alert("The user name is empty");
}
else if(pass === ""){
	window.alert("The user password is empty");
}
else if(name !== "" && pass !== ""){
    window.alert("Welcome " + name);
}
// document.getElementByinput('text').style.setColor('focus',yellow); //dosen't work
}
/* if(name!= "" && pass!="")//here erro
var dom = document.getElementById('log').innerHTML;
log.visibility = "hidden"; */
