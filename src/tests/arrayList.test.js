const { assert } = require('chai') ;
const Arraylist = require('../ArrayList.js');


describe ('ArrayList methods', function() {
    describe ('init',function() {
        const myArray = new Arraylist();
   
        it(`should change size of array`, function() {
            const initial = [1, 2, 3, 4, 5, 6];
            const expectedsize = 6;
            myArray.init(initial);

            const actual = myArray.arrsize();

            assert.deepEqual(actual, expectedsize);
        });
    })

    describe ('arrpop', function() {
        const myArray = new Arraylist();

        it(`should return last element `,function() {

            const initial = [1, 2, 3, 4, 5, 6];
            const expected = 6;
            myArray.init(initial);
            const actual = myArray.arrpop();
            
            assert.deepEqual(actual, expected);
        });

        it(`should change size of array `,function() {

            const initial = [1, 2, 3, 4, 5, 6];
            const expected = 5;
            myArray.init(initial);
            myArray.arrpop();
            const actual = myArray.arrsize()
            
            assert.deepEqual(actual, expected);
        });


    })

    describe('arrpush', function() {
        const myArray = new Arraylist();

        it(`should add new last element `,function() {

            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const element = 7;
            myArray.arrpush(element);
            const expectedAStringArray = '[1, 2, 3, 4, 5, 6, 7]';
            actual = myArray.arrtoString()                       
            assert.strictEqual(actual, expectedAStringArray);
        });

        it(`should change size of array `,function() {

            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const element = 7;
            myArray.arrpush(element);
            const expected = 7;
            const actual=myArray.arrsize();
            
            assert.strictEqual(actual, expected);
        });
    })

    describe('arrshift', function() {
        const myArray = new Arraylist();

        it(`should delete first element `,function() {
 
            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const expected = 1;
            const actual = myArray.arrshift();
                       
            assert.equal(actual, expected);
        });

        it(`should change size of array `,function() {

            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            myArray.arrshift();
            const expected = 5;
            const actual = myArray.arrsize();
            
            assert.deepEqual(actual, expected);
        });
    })

    describe('arrunshift', function() {
        const myArray = new Arraylist();

        it(`should add new first element `,function() {
            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const element = 9;
            myArray.arrunshift(9);
            const expectedAStringArray='[9, 1, 2, 3, 4, 5, 6]'; 
            actual = myArray.arrtoString()                       
            assert.strictEqual(actual, expectedAStringArray); 
            
        });

        it(`should change size of array `,function() {
            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const element = 9;
            expected = 7;
            actual = myArray.arrunshift(9);
            
            assert.deepEqual(actual, expected);
        });
    })

    describe('arrevers', function() {
        const myArray = new Arraylist();

        it(`should revers array `,function() {
            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            const expectedAStringArray='[6, 5, 4, 3, 2, 1]'; 
            myArray.arrevers()
            actual = myArray.arrtoString()                       
            assert.strictEqual(actual, expectedAStringArray); 
        });

    })

    describe('arrclear', function() {
        const myArray = new Arraylist();

        it(`should clear array `,function() {
            const initial = [1, 2, 3, 4, 5, 6];
            myArray.init(initial);
            expected = 0
            myArray.arrclear();
            actual = myArray.arrsize()
                                  
            assert.equal(actual, expected); 
            
        });

    })

    describe('arrslice', function() {
        const myArray = new Arraylist();

        it(`should slice array with 2 positive arg `,function() {
            const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            myArray.init(initial);
            const expected = "2,3,4"
            const str = myArray.arrslice(1,4);
            actual = str.toString()
            assert.equal(actual, expected);             
        });

        it(`should slice array with second 0 arg `,function() {
            const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            myArray.init(initial);
            const expected = "7,8,9"
            const str = myArray.arrslice(6,0);
            actual = str.toString()
            assert.equal(actual, expected);             
        });

        it(`should slice array with second negative arg `,function() {
            const initial = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            myArray.init(initial);
            const expected = "7,8"
            const str = myArray.arrslice(6,-1);
            actual = str.toString()
            assert.equal(actual, expected);             
        });


    })

})
