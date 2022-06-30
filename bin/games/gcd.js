import gameEngine from '../../src/index.js';

const questionText = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  const questionContent = `${a} ${b}`;
  let target;

  for (let [i] = [a, b].sort(); i > 0; i -= 1) {
    if (i === 0) { // может возникнуть так, что a  или b будет равно нулю
      target = 1; // тогда наибольшим общим делителем будет единица
      break;
    }
    if (a % i === 0 && b % i === 0) {
      target = i;
      break;
    }
  }
  console.log(target);
  return [questionContent, target];
};

export default () => gameEngine(questionText, gcdGame);
