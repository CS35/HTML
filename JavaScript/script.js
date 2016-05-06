function ValidateName()
{
  var name = document.getElementById("username").value;
  if(name.length === 0)
  {
    Error("Name is Required","usernamePrompt");
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
  {
    Error("First and last name please","usernamePrompt");
    return false;
  }
  else
  {
    Pass("Welcome "+name,"usernamePrompt","green");
    return true;
  }
}
function ValidateEmail()
{
  var email = document.getElementById("e-mail").value;
  if (email.length === 0)
  {
    Error("Email is required","EmailPrompt");
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    Error("Email Adrees is invalid","EmailPrompt","red");
    return false;
  }
  else{
  Pass("Valid email Adress","EmailPrompt","green");
  return true;
}
}
function ValidateSubmit()
{
  if (!(ValidateName()) || !(ValidateEmail()))
  {
    Error("Form must be filled to submit","submitprompt");
    return false;
  }
  else {
    Pass("submitprompt");
    return true;
  }
}

function myFocus(x) {
    x.style.background = "yellow";
}
function myBlur(x)
{
  x.style.background = "white";
}

function validate() {
var name = document.myform.username.value;
var pass = document.myform.pword.value;

if(name === "" && pass === "")
{
  Error("<p> user name and password are required </p>","error");
  return false;
}
else if(name === "")
{
  Error("<p> Error: username is empty </p>","error");
  return false;
}
else if(pass === "")
{
  Error("<p> Error: password is empty </p>","error");
  return false;
}
else if(name !== "" && pass !== "")
{
   Pass("error");
   return true;
}
}
function Error(message, promptlocation)
{
  document.getElementById(promptlocation).innerHTML = message;
  document.getElementById(promptlocation).style.color = "red";
  document.getElementById(promptlocation).style.display = "block";
}
function Pass(promptlocation)
{
  document.getElementById(promptlocation).innerHTML = "";
  document.getElementById(promptlocation).style.color = "black";
  document.getElementById(promptlocation).style.display = "none";
}
