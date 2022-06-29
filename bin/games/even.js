import gameEngine from '../../src/index.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEvenGame = () => {
  const number = Math.floor(Math.random() * 100);
  const target = number % 2 ? 'no' : 'yes';

  return [number, target];
};

export default () => gameEngine(questionText, isEvenGame); 