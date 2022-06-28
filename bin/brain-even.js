#!/usr/bin/env node

import readlineSync from 'readline-sync';

let randomNumber;
let userAnswer;
let correctAnswer;
let isEven;
let isUserWin;

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');

const userName = readlineSync.question('Your answer: ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no"');

for (let i = 0; i < 3; i += 1) {
    randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber % 2 === 0) {
        isEven = true;
        correctAnswer = 'yes';
    }
    else {
        isEven = false;
        correctAnswer = 'no';
    }
    console.log(`Question: ${randomNumber}`);
    userAnswer = readlineSync.question('');

    if(userAnswer === correctAnswer) {
        console.log('Correct!');
    }
    else {
        isUserWin = false;
        console.log(`${userAnswer} is wrong answer ;(. Correct answer is ${correctAnswer})`);
        breack;
    }
}

if(isUserWin === true) {
    console.log(`Congratulations, ${userName}`);
}