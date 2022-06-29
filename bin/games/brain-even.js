#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { welcomeUser, getUserName, startQuestion } from '../../src/index.js';

const questionContent = []; // массив с текстами вопросов
const target = []; // массив с необходимыми ответами
const questionText = 'Answer "yes" if the number is even, otherwise answer "no"';

// заполняем массив с вопросами и необходимыми ответами
for (let i = 0; i < 3; i += 1) {
    questionContent[i] = Math.floor(Math.random() * 100);

    if (questionContent[i] % 2 === 0) {
        target[i] = 'yes';
    } else {
        target[i] = 'no';
    }
}

welcomeUser();
const userName = getUserName();

const isUserWin = startQuestion(questionText, questionContent, target);

if (isUserWin === true) {
    console.log(`Congratulations, ${userName}`);
} else {
    console.log(`Let\`s try again, ${userName}`);
}