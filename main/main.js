/**
 * Created by joharchan on 17-7-18.
 */
'use strict';

function guessNumber(num) {
    let countA = 0;
    let countB = 0;
    // let num1 = Math.floor(num/1000);
    // let num2 = Math.floor((num-num1*1000)/100);
    // let num3 = Math.floor((num-num1*1000-num2*100)/10);
    // let num4 = num%10;

    // let num1 = num.toString().substr(0,1);
    // let num2 = num.toString().substr(1,1);
    // let num3 = num.toString().substr(2,1);
    // let num4 = num.toString().substr(3,1);
    // let arrNumber = [num1,num2,num3,num4];
    //let arrCompared = Math.random().toString();
    let arrCompared = [1,2,3,4];
    let arrNumber = num.toString();
    // let arrNumber = [];
    // for(let i=0; i<num.toString().length; i++){
    //     arrNumber.push(num.toString().substr(i,1));
    // }
    for(let i =0; i<arrNumber.length; i++)
        for(let j=0; j<arrCompared.length; j++){
        if(arrNumber[i]==arrCompared[j]){
          if(i==j){
              countA++;
          }
          else{
              countB++;
          }

        }
        }



    return `${countA}A${countB}B`;
}

