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

  for (let i = 0; i < roundNum; i += 1) {
    const [questionContent, target] = game();
    console.log(`Question: ${questionContent}`);

    userAnswer = readlineSync.question('');

    if (userAnswer === target.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${target}.`);
      console.log(`Let\`s try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
