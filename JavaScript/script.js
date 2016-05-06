
function ValidateSubmit()
{
  var name = document.getElementById("username").value;
  var email = document.getElementById("e-mail").value;
  var firstmessage = document.getElementById("fmessage").value;
  var secondmessage = document.getElementById("smessage").value;
  if(name.length === 0)
  {
    Error("Name is Required","submitprompt");
    return false;
  }
  if(email.length === 0)
  {
    Error("Email is required","submitprompt");
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    Error("Email Adrees is invalid","submitprompt");
    return false;
  }
  if (firstmessage.length === 0)
  {
    Error("Please enter some text in the first box","submitprompt");
    return false;
  }
  if (secondmessage.length === 0)
  {
    Error("Please enter some text in the second box","submitprompt");
    return false;
  }
  if (firstmessage.length === 0 & secondmessage.length === 0)
  {
    Error("Please enter some text in both of the boxes","submitprompt");
    return false;
  }
  else
 {
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
