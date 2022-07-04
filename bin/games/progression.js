import gameEngine from '../../src/index.js';

const questionText = 'What number is missing in the progression?';

const progressionGame = () => {
  const startNum = Math.floor(Math.random() * 100);
  const stepOfProg = Math.floor(Math.random() * 9) + 1;
  let target = Math.floor(Math.random() * 10);
  let nextNum = startNum;
  let randomProgression = '';

  for (let i = 0; i < 10; i += 1) {
    if (target === i) {
      randomProgression += ' .. ';
      target = nextNum;
      nextNum += stepOfProg;
    } else {
      randomProgression += ` ${nextNum} `;
      nextNum += stepOfProg;
    }
  }
  return [randomProgression, target];
};

export default () => gameEngine(questionText, progressionGame);
