/*-------------------log in------------------------------*/
function validate() {
var name = document.myform.username.value;
var pass = document.myform.pword.value;

//makes the username at least 2 charecters
if(name === "" && pass === ""){
	window.alert("The user name and password is empty");
	return false;
}
else if(name === ""){
	window.alert("The user name is empty");
	return false;
}
else if(pass === ""){
	window.alert("The user password is empty");
	return false;
}
else if(name !== "" && pass !== ""){
    window.alert("Welcome " + name);
    return true;
}
}
// document.getElementByinput('text').style.setColor('focus',yellow); //dosen't work

/* if(name!= "" && pass!="")//here erro
var dom = document.getElementById('log').innerHTML;
log.visibility = "hidden"; */

/*-------------------feedback------------------------------*/
function checkForm(){

var fname = document.feedform.usernam.value;
var mail = document.feedform.e-mail.value;
var message = document.feedform.message.value;

if (fname == ""){
	window.alert("The user name is empty");
	return false;
}
else if (mail == ""){
	window.alert("The user E-mail is empty");
	return false;
}
else if (massage == ""){
	window.alert("The message is empty");
	return false;
}
//validation email
 var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length) {
        alert("Not a valid e-mail address");
        return false;
}