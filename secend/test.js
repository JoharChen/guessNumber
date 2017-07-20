'use strict';

const sinon = require('sinon');
const readline = require('readline-sync');
const guessNumberModule = require('./main');



function shouldGet0A0B(){
    const  systemRandomNumStr = sinon.stub(guessNumberModule.obj,'randNumStr').returns('1234');
    const  inputGuessedNumStr = sinon.stub(readline,'question').returns('5678');
    const result = guessNumberModule.obj.guessNumber();
    console.log(result === '0A0B' ? '0A0B pass':'0A0B fail');
    inputGuessedNumStr.restore();
}

function shouldGet1A0B(){
    const  inputGuessedNumStr = sinon.stub(readline,'question').returns('1678');
    const result = guessNumberModule.obj.guessNumber();
    console.log(result === '1A0B' ? '1A0B pass':'1A0B fail');
    inputGuessedNumStr.restore();
}

function shouldGet1A1B(){
    const  inputGuessedNumStr = sinon.stub(readline,'question').returns('1628');
    const result = guessNumberModule.obj.guessNumber();
    console.log(result === '1A1B' ? '1A1B pass':'1A1B fail');
    inputGuessedNumStr.restore();
}

function shouldGet4A0B(){
    const  inputGuessedNumStr = sinon.stub(readline,'question').returns('1234');
    const result = guessNumberModule.obj.guessNumber();
    console.log(result === '4A0B' ? '4A0B pass':'4A0B fail');
    inputGuessedNumStr.restore();
}

shouldGet0A0B();
shouldGet1A0B();
shouldGet1A1B();
shouldGet4A0B();