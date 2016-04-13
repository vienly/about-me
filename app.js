var QA = [['What is my favorite game?', 'Dota'],
              ['What is my favorite sport?', 'Soccer'],
              ['What is my favorite food?', 'Sushi'],
              ['Which high school did I go to?', 'Hazen'],
              ['What car do I drive?', 'Camry']];

var QA7 = ['Can you guess a state I\'ve lived in besides Washington?', ['California', 'Oregon']];

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
  var tally = document.getElementById('tally');

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
      userInput = prompt('TOO HIGH. Guess again! ' + chances + ' left.');
    } else if (userInput < ans) {
      userInput = prompt('TOO LOW. Guess again! ' + chances + ' left.');
    }
    chances--;
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

  //seventh question
  question = QA7[0];
  ans = QA7[1];
  chances = 6;
  var done = false;
  console.log(question);
  console.log(ans);

  while (chances > 0 && done != true) {
    userInput = prompt(question);
    chances--;

    for (var i = 0; i < ans.length; i++) {
      if (userInput == ans[i]) {
        alert('BAM');
        tempt = document.createTextNode(question + ' ' + 'Answers: ' + ans + '. You got this right in ' + (6 - chances) + ' guesses');
        correct++;
        done = true;
        break;
      }
    }
  }

  if (chances <= 0) {
    alert ('You ran out of guesses :(');
    tempt = document.createTextNode(question + ' ' + 'Answer: ' + ans + '. You got this wrong with all 6 guesses :(');
  }

  log = document.createElement('li');
  log.appendChild(tempt);
  gameLog.appendChild(log);

  guessGame.appendChild(gameLog);

  var rightGuessSummary = document.createTextNode('You have gotten ' + correct + ' answer(s) right!');
  tally.appendChild(rightGuessSummary);

}

var userName = greeting();
gameTest();
