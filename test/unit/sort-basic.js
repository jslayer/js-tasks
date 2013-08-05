/**
 * Check your implementation with ./start.sh
 * This shell script should execute tests in Firefox, Chrome & PhantomJS
 * All tests should be successfully completed.
 */
'use strict';

describe('sort-basic.js', function(){
    var src;

    beforeEach(function() {
      src = [1, 2, 5, 6, 9, 0, 3, 4, 7, 8, 10];
    });

    it('should sort an array', function(){

        assert.deepEqual(src.sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    });

    it('should sort with custom function from lower to higher', function() {

        assert.deepEqual(src.sort(function(a, b){
            return a > b ? 1 : -1;
        }), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    });

    it ('should sort with custom function from higher to lower', function() {

        assert.deepEqual(src.sort(function(a, b){
            return a > b ? -1 : 1;
        }), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

    });

    it('should sort with custom function without the changing the position of elements', function(){

        assert.deepEqual(src.sort(function(a, b){
            return 0;
        }), [1, 2, 5, 6, 9, 0, 3, 4, 7, 8, 10]);

    });
});
