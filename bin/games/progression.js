import gameEngine from '../../src/index.js';

const questionText = 'What number is missing in the progression?';

const progressionGame = () => {
  const startNum = Math.floor(Math.random() * 100);
  const stepOfProg = Math.floor(Math.random() * 9) + 1;
  const lengthOfProgression = Math.floor(Math.random() * 5) + 5;
  let target = Math.floor(Math.random() * lengthOfProgression);
  let nextNum = startNum;
  let randomProgression = '';

  for (let i = 0; i < lengthOfProgression; i += 1) {
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
