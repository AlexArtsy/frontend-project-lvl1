import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const startQuestion = (questionText, questionContent, target) => {
  let userAnswer;
  let isUserWin;
  console.log(questionText);

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${questionContent[i]}`);
    userAnswer = readlineSync.question('');

    if (userAnswer === target[i]) {
      console.log('Correct!');
    } else {
      isUserWin = false;
      console.log(`${userAnswer} is wrong answer ;(. Correct answer is ${target[i]})`);

      return isUserWin;
    }
  }

  isUserWin = true;
  return isUserWin;
};
