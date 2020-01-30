# About-Me
## This is a site about me. lab 02 ##
## Synopsis ##

This is a class development project that will be continually updated as we learn new coding practices over a 10 week period.
For the first update to the program I added two additional qustions. The first was a guessing game that allowed the user 4 attempts to guess a randomly generated number between 1 and 10. The next question stored a list of states in an array. The user was then allowed 6 guesses. I applied a tally to track how many of the 7 questions the user got correct and then reported that to them upon completion.

In a pair programming exercise Lillian McBride was the driver and Justin
Shroyer was the navigator.

![Accessibility test](/Images/Justin.png)

## Code Example ##

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

## Motivation ##

This is the best way to incorporate best practices as I am learning them.

## Installation ##

Provide code examples and explanations of how to get the project.

## API Reference ##

This project is small and simple enough the reference docs can be added to the README.

## Tests ##

Tests were run by running Live Server in VS and then opening the console.

## Contributors ##

None at this point

## License ##

MIT 