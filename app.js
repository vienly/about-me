var QA = {
  Qs: ['What is my favorite game?',
        'What is my favorite sport?',
        'What is my favorite food?',
        'Which high school did I go to?',
        'What car do I drive?'],

  As: ['Dota',
        'Soccer',
        'Sushi',
        'Hazen',
        'Camry']
};

function greeting() {
  'use strict';
  var userName = prompt('Hello, what is your name?');
  console.log('User\'s name is "' + userName + '"');
  alert('Hello ' + userName);
  return userName;
}

function game() {
  'use strict';
  var userInput;
  var correct = 0;
  for (var i = 0; i < 5; i++) {
    userInput = prompt(QA.Qs[i]);
    console.log(QA.Qs[i]);
    console.log('User\'s input is: ' + userInput);
    if (userInput.toLowerCase() == QA.As[i].toLowerCase()) {
      alert('BAM');
      correct++;
    } else {
      alert('Nice try!');
    }
  }
  alert('You\'ve gotten ' + correct + ' answers right!');
}

var userName = greeting();
game();
