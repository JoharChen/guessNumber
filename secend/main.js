'use strict';

const readline = require('readline-sync');

const obj = {
    randNumStr : function () {
        return (Math.floor(Math.random()*9000) + 1000).toString();
    },


    guessNumber :function () {
        const systemRandomNumStr = obj.randNumStr();
        const inputGuessedNumStr = readline.question(`输入一个四位数：`);
        let countA = 0,
            countB = 0,
            totalCount = 0;
        for(let i in systemRandomNumStr)
        {
            if(inputGuessedNumStr.indexOf(systemRandomNumStr[i]) !== -1){
                totalCount++;
            }

            if(inputGuessedNumStr[i] === systemRandomNumStr[i]){
                countA++
            }

            countB = totalCount-countA;
        }
        return `${countA}A${countB}B`;
    }
};


module.exports.obj = obj;