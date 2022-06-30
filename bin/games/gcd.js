import gameEngine from '../../src/index.js';

const questionText = 'Find the greatest common divisor of given numbers.';
const getMinNumber = (a, b) => {
  if (Math.abs(a) < Math.abs(b)) {
    return a;
  }
  return b;
};

const gcdGame = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const questionContent = `${a} ${b}`;
  let target;

  for (let i = getMinNumber(a, b); i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      target = i.toString();
      break;
    }
  }
  return [questionContent, target];
};

export default () => gameEngine(questionText, gcdGame);
