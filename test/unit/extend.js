'use strict';

describe('extend.js', function(){

    describe('basic extend', function(){
        var A, B, a, b;

        beforeEach(function(){
            A = function(){
                this.initialize();
            };

            A.prototype.initialize = function(){
                this.value = 'A:I';
            };

            A.prototype.methodA = function(){
                return 'A:A';
            };

            A.prototype.methodB = function(){
                return 'A:B';
            };

            A.sMethodA = function(){
                return 'SA:A';
            };

            A.sMethodB = function(){
                return 'SA:B';
            };

            B = extend(A, {
                methodB : function(){
                    return 'B:B';
                },

                initialize : function(){
                    this.value = 'B:I';
                }
            }, {
                sMethodB : function(){
                    return 'SB:B'
                }
            });

            a = new A;
            b = new B;
        });

        it('should verify that b is an instanceOf A & B', function(){
            assert.instanceOf(b, A);
            assert.instanceOf(b, B);
        });

        it('should verify that a.value === "A:I"', function(){
            assert.strictEqual(a.value, 'A:I');
        });

        it('should verify that b.value === "B:I"', function(){
            assert.strictEqual(b.value, 'B:I');
        });

        it('should check an output of .methodA', function(){
            assert.strictEqual(a.methodA(), 'A:A');
            assert.strictEqual(b.methodA(), 'A:A');
        });

        it('should check an output of .methodB', function(){
            assert.strictEqual(a.methodB(), 'A:B');
            assert.strictEqual(b.methodB(), 'B:B');
        });

        it('should check an output of static method .sMethodA', function(){
            assert.strictEqual(A.sMethodA(), 'SA:A');
            assert.strictEqual(B.sMethodA(), 'SA:A');
        });

        it('should check an output of static method .sMethodB', function(){
            assert.strictEqual(A.sMethodB(), 'SA:B');
            assert.strictEqual(B.sMethodB(), 'SB:B');
        });
    });

    describe('verify constructor replacement', function(){
        var A, B;

        beforeEach(function(){
            A = function(){
                throw new Error('Implement your own constructor');
            };
        });

        it('should see an error while direct instance creation of parent constructor', function(){

            assert.throw(function(){
                var a = new A();
            }, 'Implement your own constructor');

        });

        it('should extend the parent and override `initialize` method', function(){
            B = extend(A, {
                constructor : function(){
                    this.value = 'Hello';
                }
            });

            var b = new B();

            assert.strictEqual(b.value, 'Hello');
        });
    });

    describe('working with constructor parameters', function(){
        var A, B, data;

        beforeEach(function(){
            A = function(data){
                var i;

                for(i in data) {
                    if (data.hasOwnProperty(i) && ~['string', 'number'].indexOf(typeof data[i])) {
                        this[i] = data[i];
                    }
                }
            };

            B = extend(A, {
                constructor : function(data){
                    this.constructor.allowed.forEach(function(v){
                        if (typeof data[v] !== 'undefined') {
                            this[v] = data[v];
                        }
                    }, this);
                }
            }, {
                allowed : ['one', 'three']
            });

            data = {
                one : 'one',
                two : 2,
                three : function() {
                    return 'I\'m the value';
                }
            };
        });

        it('should check the values of an instance of A', function(){
            var a = new A(data);

            assert.strictEqual(a.one, 'one');
            assert.strictEqual(a.two, 2);
            assert.isUndefined(a.three);
        });

        it('should check the values of an instance of B', function(){
            var b = new B(data);

            assert.strictEqual(b.one, 'one');
            assert.isUndefined(b.two);
            assert.strictEqual(b.three, data.three);
            //assert.isFunction(b.three);
            //assert.strictEqual(b.three(), "I'm the value");
        });

    });
});
