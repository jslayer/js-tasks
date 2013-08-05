'use strict';

describe('strings-basic.js', function(){

    describe('StringsBasic.subCount', function(){
        it('should return number of occurrences of a substring in a string', function(){
            assert.strictEqual(StringsBasic.subCount(
                'Hello world', 'hello'
            ), 1);

            assert.strictEqual(StringsBasic.subCount(
                'Lorem ipsum dolor sit amet', ' '
            ), 4);

            assert.strictEqual(StringsBasic.subCount(
                'hello', 'world'
            ), 0);
        });
    });

    describe('StringsBasic.wordsContains', function(){
        it('should find all the words in a string containing a substring', function(){
            assert.deepEqual(StringsBasic.wordsContains(
                'Hello world', 'o'
            ), [
                'Hello',
                'world'
            ]);

            assert.deepEqual(StringsBasic.wordsContains(
                'Hello cruel world', 'ord'
            ), []);

            assert.deepEqual(StringsBasic.wordsContains(
                'Lorem ipsum dolor', 'or'
            ), [
                'Lorem',
                'dolor'
            ]);

            assert.deepEqual(StringsBasic.wordsContains(
                'Lorem ipsum dolor', 'ips'
            ), [
                'ipsum'
            ]);

            assert.deepEqual(StringsBasic.wordsContains(
                'Lorem ipsum dolor', 'lorem'
            ), [
                'Lorem'
            ]);

            assert.deepEqual(StringsBasic.wordsContains(
                'Lorem!Ipsum!Dolor', 'lorem'
            ), [
                'Lorem'
            ]);
        });
    });

    describe('StringsBasic.wordsNotContains', function(){
        it('should find all the words in a string not containing a substring', function(){
            assert.deepEqual(StringsBasic.wordsNotContains(
                'Hello world', 'o'
            ), []);

            assert.deepEqual(StringsBasic.wordsNotContains(
                'Hello cruel world', 'ord'
            ), [
                'Hello', 'cruel', 'world'
            ]);

            assert.deepEqual(StringsBasic.wordsNotContains(
                'Lorem ipsum dolor', 'or'
            ), [
                'ipsum'
            ]);

            assert.deepEqual(StringsBasic.wordsNotContains(
                'Lorem ipsum dolor', 'ips'
            ), [
                'Lorem', 'dolor'
            ]);

            assert.deepEqual(StringsBasic.wordsNotContains(
                'Lorem ipsum dolor', 'lorem'
            ), [
                'ipsum', 'dolor'
            ]);

            assert.deepEqual(StringsBasic.wordsNotContains(
                'Lorem|ipsum|dolor', 'lorem'
            ), [
                'ipsum', 'dolor'
            ]);
        });
    });

    describe('StringsBasic.wordsBeginCapital', function(){
        it('should find all the words in a string beginning with a capital letter', function(){
            assert.deepEqual(StringsBasic.wordsBeginCapital('Hello cruel'), ['Hello']);

            assert.deepEqual(StringsBasic.wordsBeginCapital('hello cruel'), []);

            assert.deepEqual(StringsBasic.wordsBeginCapital('hello Cruel'), ['Cruel']);

            assert.deepEqual(StringsBasic.wordsBeginCapital('Hello Cruel world'), ['Hello', 'Cruel']);

            assert.deepEqual(StringsBasic.wordsBeginCapital('Hello cruel World'), ['Hello', 'World']);

            assert.deepEqual(StringsBasic.wordsBeginCapital('Hello,Cruel_World'), ['Hello', 'Cruel']);

            assert.deepEqual(StringsBasic.wordsBeginCapital('Hello,123'), ['Hello']);
        });
    });

    describe('StringsBasic.isPalindrome', function(){
        it('should detects whether the string is a palindrome', function(){
            assert.strictEqual(StringsBasic.isPalindrome('Ada'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Anna'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Bob'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Aviva'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Eve'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Lon Nol'), true);
            assert.strictEqual(StringsBasic.isPalindrome('12321'), true);
            assert.strictEqual(StringsBasic.isPalindrome('16FLF61'), true);
            assert.strictEqual(StringsBasic.isPalindrome('Saippuakivikauppias'), true);

            assert.strictEqual(StringsBasic.isPalindrome('Hello'), false);
            assert.strictEqual(StringsBasic.isPalindrome('Cruel'), false);
            assert.strictEqual(StringsBasic.isPalindrome('World'), false);
            assert.strictEqual(StringsBasic.isPalindrome('Lorem'), false);
            assert.strictEqual(StringsBasic.isPalindrome('Ipsum'), false);
            assert.strictEqual(StringsBasic.isPalindrome('Dolor'), false);
            assert.strictEqual(StringsBasic.isPalindrome('S0ippuakivikauppias'), false);
        });
    });

});
