import readlineSync from 'readline-sync';

const welcomeUser = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default (questionText, game) => {

  welcomeUser();
  const userName = getUserName();
  const roundNum = 3;
  console.log(questionText);
  let userAnswer;

  for(let i = 0; i < roundNum; i += 1) {

    const [questionContent, target] = game();
    console.log(`Question: ${questionContent}`);

    userAnswer = readlineSync.question('');

    if (userAnswer === target) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${target}.`);
      console.log(`Let\`s try again, ${userName}`);
      return;
    }
    console.log(`Congratulations, ${userName}`);
  }
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


