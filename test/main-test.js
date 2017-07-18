/**
 * Created by joharchan on 17-7-18.
 */
'use strict';

describe('guessNumber',()=>{
    it('0A0B',()=>{
        let num = 5678;
        const actualResult = guessNumber(num);
        let expectedResult = '0A0B';
        expect(actualResult).toEqual(expectedResult);
    });

    it('1A0B',()=>{
        let num = 1678;
        const actualResult = guessNumber(num);
        let expectedResult = '1A0B';
        expect(actualResult).toEqual(expectedResult);
    });


    it('1A1B',()=>{
        let num = 1378;
        const actualResult = guessNumber(num);
        let expectedResult = '1A1B';
        expect(actualResult).toEqual(expectedResult);
    });

    it('3A0B',()=>{
        let num = 1238;
        const actualResult = guessNumber(num);
        let expectedResult = '3A0B';
        expect(actualResult).toEqual(expectedResult);
    });

    it('1A2B',()=>{
        let num = 1328;
        const actualResult = guessNumber(num);
        let expectedResult = '1A2B';
        expect(actualResult).toEqual(expectedResult);
    });

    it('4A0B',()=>{
        let num = 1234;
        const actualResult = guessNumber(num);
        let expectedResult = '4A0B';
        expect(actualResult).toEqual(expectedResult);
    });

});