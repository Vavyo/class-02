"use strict";
//just here so its different
//first things to do
console.log('this is the app.js, connected to the index');

//Prompt our user for input data
var userName = prompt("What is your name?")
console.log(userName);

//Greet the user
alert('Hello ' + userName);

//Validate user input
var toLowerCase = userName.toLowerCase();
console.log(toLowerCase);

// if(condition){do something}else{do somethingElse}

if(toLowerCase === 'bob' || toLowerCase === 'nathan')
{
  alert('Welcome back to my page, ' + userName)
}
else{
  alert('Welcome to my page new User')

}
