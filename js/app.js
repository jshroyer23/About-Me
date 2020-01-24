'use strict';

var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName);
alert('Hello ' + userName + '! Welcome to my site.');
alert('Let\'s play a game to learn more about me.');

var firstAnswer = prompt('I have two dogs.');
var firstAnswerLower = firstAnswer.toLowerCase();
if((firstAnswerLower === 'y') || (firstAnswerLower === 'yes'))
{
  console.log(firstAnswer + ' is correct');
  alert('That is correct, I have two dogs');
}
else if((firstAnswerLower === 'n') || (firstAnswerLower === 'no'))
{
  console.log(firstAnswer + ' is incorrect');
  alert('I actually do have two dogs');
}
else {
  alert('I\'m sorry. Your response is in an invalid format.');
}

var secondAnswer = prompt('I have three kids who are 17, 13, and 12.');
var secondAnswerLower = secondAnswer.toLowerCase();
if((secondAnswerLower === 'y') || (secondAnswerLower === 'yes'))
{
  console.log(secondAnswer + ' is correct');
  alert('That is correct, I have three kids and those are their ages.');
}
else if((secondAnswerLower === 'n') || (secondAnswerLower === 'no'))
{
  console.log(secondAnswer + ' is incorrect');
  alert('I actually do have three kids who are 17, 13, and 12.');
}
else
{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var thirdAnswer = prompt('Taco is my favorite pizza.');
var thirdAnswerLower = thirdAnswer.toLowerCase();
if((thirdAnswerLower === 'y') || (thirdAnswerLower === 'yes'))
{
  console.log(thirdAnswer + ' is correct');
  alert('That is correct, taco is my favorite pizza.');
}
else if((thirdAnswerLower === 'n') || (thirdAnswerLower === 'no'))
{
  console.log(thirdAnswer + ' is incorrect');
  alert('Taco actually is my favorite pizza.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var fourthAnswer = prompt('Tigers are my favorite animal.');
var fourthAnswerLower = fourthAnswer.toLowerCase();
if((fourthAnswerLower === 'y') || (fourthAnswerLower === 'yes'))
{
  console.log(fourthAnswer + ' is correct');
  alert('That is correct, tiger are my favorite animal.');
}
else if((fourthAnswerLower === 'n') || (fourthAnswerLower === 'no'))
{
  console.log(fourthAnswer + ' is incorrect');
  alert('Tigers actually are my favorite animal.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var fifthAnswer = prompt('I am a die hard St. Louis Cardinals fan.');
var fifthAnswerLower = fifthAnswer.toLowerCase();
if((fifthAnswerLower === 'y') || (fifthAnswerLower === 'yes'))
{
  console.log(fifthAnswer + ' is correct');
  alert('That is correct, the Cardinals are my favorite sports team.');
}
else if((fifthAnswerLower === 'n') || (fifthAnswerLower === 'no'))
{
  console.log(fifthAnswer + ' is incorrect');
  alert('The Cardinals actually are my favorite baseball team.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

alert('Thanks for playing ' + userName + '! Have a great day!');
