function ValidateName()
{
  var name = document.getElementById("username").value;
  if(name.length === 0)
  {
    ProducePrompt("Name is Required","usernamePrompt","red");
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
  {
    ProducePrompt("First and last name please","usernamePrompt","red");
    return false;
  }
  ProducePrompt("Welcome "+name,"usernamePrompt","green");
  return true;
}
function ValidateEmail()
{
  var email = document.getElementById("e-mail").value;
  if (email.length === 0)
  {
    ProducePrompt("Email is required","EmailPrompt","red");
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    ProducePrompt("Email Adrees is invalid","EmailPrompt","red");
    return false;
  }
  ProducePrompt("Valid email Adress","EmailPrompt","green");
  return true;

}
function ValidateSubmit()
{
  if (!(ValidateName()) || !(ValidateEmail()))
  {
    jsShow(submitprompt);
    ProducePrompt("Form must be valid to submit","submitprompt","red");
    setTimeout(function(){jsHide("submitprompt");},2000);
    return false;
  }
}
function ProducePrompt(message, promptlocation, color)
{
  document.getElementById(promptlocation).innerHTML = message;
  document.getElementById(promptlocation).style.color = color;
}

function myFocus(x) {
    x.style.background = "yellow";
}

function jsShow(id)
{
  document.getElementsById(id).style.display = "block";
}
function jsHide(id)
{
  document.getElementsById(id).style.display = "none";
}

function validate() {
var name = document.myform.username.value;
var pass = document.myform.pword.value;

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
