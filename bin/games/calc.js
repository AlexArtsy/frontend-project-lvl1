import gameEngine from '../../src/index.js';

const questionText = 'What is the result of the expression?';

const isCalcGame = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const operations = [a + b, a - b, a * b];
  const signs = ['+', '-', '*'];

  const randomIndex = Math.floor(Math.random() * 2);
  const target = operations[randomIndex].toString();
  const randomOperation = `${a} ${signs[randomIndex]} ${b}`;

  return [randomOperation, target];
};

export default () => gameEngine(questionText, isCalcGame);
