import gameEngine from '../../src/index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const num = Math.floor(Math.random() * 100);
  let target;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      target = 'no';
      return [num, target];
    }
  }
  target = 'yes';
  return [num, target];
};

export default () => gameEngine(questionText, primeGame);
