'use strict';

var tally = 0;
var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName);
alert('Hello ' + userName + '! Welcome to my site.');
alert('Let\'s play a game to learn more about me.\n Your answers should be in a Yes/No format.');

function question1() {
  var firstAnswer = prompt('Do I have two dogs?');
  var firstAnswerLower = firstAnswer.toLowerCase();
  if((firstAnswerLower === 'y') || (firstAnswerLower === 'yes'))
  {
    console.log(firstAnswer + ' is correct');
    alert('That is correct, I have two dogs. One is a sheltie and the other is a german shepard/golden retriever mix.');
    tally ++;
  }
  else if((firstAnswerLower === 'n') || (firstAnswerLower === 'no'))
  {
    console.log(firstAnswer + ' is incorrect');
    alert('I actually do have two dogs');
  }
  else {
    alert('I\'m sorry. Your response is in an invalid format.');
  }
}

var secondAnswer = prompt('Do I have three kids who are 17, 13, and 12?');
var secondAnswerLower = secondAnswer.toLowerCase();
if((secondAnswerLower === 'y') || (secondAnswerLower === 'yes'))
{
  console.log(secondAnswer + ' is correct');
  alert('That is correct, I have three kids and those are their ages.');
  tally ++;
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

var thirdAnswer = prompt('Is Taco my favorite pizza?');
var thirdAnswerLower = thirdAnswer.toLowerCase();
if((thirdAnswerLower === 'y') || (thirdAnswerLower === 'yes'))
{
  console.log(thirdAnswer + ' is correct');
  alert('That is correct, taco is my favorite pizza.');
  tally ++;
}
else if((thirdAnswerLower === 'n') || (thirdAnswerLower === 'no'))
{
  console.log(thirdAnswer + ' is incorrect');
  alert('Taco actually is my favorite pizza.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var fourthAnswer = prompt('Are Tigers my favorite animal?');
var fourthAnswerLower = fourthAnswer.toLowerCase();
if((fourthAnswerLower === 'y') || (fourthAnswerLower === 'yes'))
{
  console.log(fourthAnswer + ' is correct');
  alert('That is correct, tigers are my favorite animal.');
  tally ++;
}
else if((fourthAnswerLower === 'n') || (fourthAnswerLower === 'no'))
{
  console.log(fourthAnswer + ' is incorrect');
  alert('Tigers actually are my favorite animal.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var fifthAnswer = prompt('Am I a die hard St. Louis Cardinals fan?');
var fifthAnswerLower = fifthAnswer.toLowerCase();
if((fifthAnswerLower === 'y') || (fifthAnswerLower === 'yes'))
{
  console.log(fifthAnswer + ' is correct');
  alert('That is correct, the Cardinals are my favorite sports team.');
  tally ++;
}
else if((fifthAnswerLower === 'n') || (fifthAnswerLower === 'no'))
{
  console.log(fifthAnswer + ' is incorrect');
  alert('The Cardinals actually are my favorite baseball team.');
}
else{
  alert('I\'m sorry. Your response is in an invalid format.');
}

var response = confirm('Let\'s play a guessing game');
if(response === true)
{
  alert('You have 4 tries to guess a number between 1 and 10.');
  var number = Math.floor((Math.random() * 10) + 1);
  console.log(number);
  for(var i = 0; i < 4; i++)
  {
    console.log('i = ' + i);
    var sixthAnswer = prompt('What is your guess?');
    if(i === 3 && sixthAnswer !== number.toString())
    {
      alert('I\'m sorry, that was 4 guesses. The correct number is ' + number);
      break;
    }
    else if(sixthAnswer === number.toString())
    {
      alert('You are correct, the number is ' + number);
      tally ++;
      break;
    }
    else if(sixthAnswer < number)
    {
      alert('Too low');
    }
    else if(sixthAnswer > number)
    {
      alert('Too high');
    }
  }
}
else
{
  alert('May be next time');
}

alert('I have several states that I enjoy visiting or vacationing in. You will have 6 attempts to try guessing one.');
var cities = ['missouri', 'florida', 'california', 'nevada', 'wisconsin'];
var len = cities.length;
for(var j = 0; j < 6; j++)
{
  var seventhAnswer = prompt('What is your guess?');
  var seventhAnswerLow = seventhAnswer.toLowerCase();
  console.log(seventhAnswerLow);
  console.log('j = ' + j);
  var inArray;
  for(var k = 0; k < len; k ++)
  {
    console.log('k = ' + k + ' ' + cities[k] + ' ' + inArray);
    if(seventhAnswerLow === cities[k])
    {
      inArray = true;
      break;
    }
    else
    {
      inArray = false;
    }
  }
  if(j === 5 && inArray === false)
  {
    alert('I\'m sorry, that was 6 guesses. The correct states are Missouri, Florida, California, Nevada, and Wisconsin.');
    break;
  }
  else if(inArray === true)
  {
    alert('That is correct. My favorite states to visit include Missouri, Florida, California, Nevada, and Wisconsin.');
    tally ++;
    break;
  }
  else if(inArray === false)
  {
    alert('That is incorrect. Guess again.');
  }
}
var score = Math.round((tally / 7) * 100);
alert('Thanks for playing ' + userName + '! You got ' + tally + ' questions correct. Your score is ' + score + '%. Have a great day!');
question1();
