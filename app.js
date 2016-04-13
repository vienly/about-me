var QA = [['What is my favorite game?', 'Dota'],
              ['What is my favorite sport?', 'Soccer'],
              ['What is my favorite food?', 'Sushi'],
              ['Which high school did I go to?', 'Hazen'],
              ['What car do I drive?', 'Camry']];

function greeting() {
  'use strict';
  var userName = prompt('Hello, what is your name?');
  console.log('User\'s name is "' + userName + '"');
  alert('Hello ' + userName);
  return userName;
}

function gameTest() {
  'use strict';

  //create a new section for logging the guessing game
  var guessGame = document.getElementById('guessing-game');
  var gameLog = document.createElement('ol');

  var question;
  var ans;
  var userInput;
  var log;
  var tempt;
  var correct = 0;

  for (var i = 0; i < 5; i++) {
    question = QA[i][0];
    ans = QA[i][1];

    userInput = prompt(question);
    console.log(question);
    console.log('User\'s input is: ' + userInput);
    if (userInput.toLowerCase() == ans.toLowerCase()) {
      alert('BAM');
      tempt = document.createTextNode(question + ' ' + 'Answer: ' + ans + '. You got this right!');
      correct++;
    } else {
      alert('WRONG');
      tempt = document.createTextNode(question + ' ' + 'Answer: ' + ans + '. You got this wrong!');
    }

    log = document.createElement('li');
    log.appendChild(tempt);
    gameLog.appendChild(log);
  }

  // sixth question
  var numberRange = 20;
  var chances = 4;
  userInput = 'not yet set'; // reset userInput for new question type, null for easy comparisons
  question = ('What number am I thinking of? (1-20) 4 guesses :^)');
  ans = Math.floor(Math.random() * numberRange);
  console.log(question);
  console.log(ans);

  while (userInput != ans && chances > 0) {
    while (isNaN(userInput)) {
      console.log('User\'s input is: ' + userInput + ' is not a number');
      userInput = prompt(question);
    }
    console.log('User\'s input is: ' + userInput);
    if (userInput > ans) {
      chances--;
      userInput = prompt('TOO HIGH. Guess again! ' + chances + ' left.');
    } else if (userInput < ans) {
      chances--;
      userInput = prompt('TOO LOW. Guess again! ' + chances + ' left.');
    }
  }

  if (chances <= 0) {
    alert('You ran out of guesses :^)');
    tempt = document.createTextNode(question + ' ' + 'Answer: ' + ans + '. You got this wrong with all 4 guesses :(');
  } else {
    alert('BAM');
    tempt = document.createTextNode(question + ' ' + 'Answer: ' + ans + '. You got this right in ' + (4 - chances) + ' guesses');
    correct++;
  }

  log = document.createElement('li');
  log.appendChild(tempt);
  gameLog.appendChild(log);
  guessGame.appendChild(gameLog);
}

var userName = greeting();
gameTest();
