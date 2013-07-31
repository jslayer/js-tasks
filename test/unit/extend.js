'use strict';

describe('extend.js', function(){
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

    it('should verify that a.value === "A:I"', function() {
        assert.strictEqual(a.value, 'A:I');
    });

    it('should verify that b.value === "B:I"', function() {
        assert.strictEqual(b.value, 'B:I');
    });

    it('should check an output of .methodA', function() {
        assert.strictEqual(a.methodA(), 'A:A');
        assert.strictEqual(b.methodA(), 'A:A');
    });

    it('should check an output of .methodB', function() {
        assert.strictEqual(a.methodB(), 'A:B');
        assert.strictEqual(b.methodB(), 'B:B');
    });

    it('should check an output of static method .sMethodA', function() {
        assert.strictEqual(A.sMethodA(), 'SA:A');
        assert.strictEqual(B.sMethodA(), 'SA:A');
    });

    it('should check an output of static method .sMethodB', function() {
        assert.strictEqual(A.sMethodB(), 'SA:B');
        assert.strictEqual(B.sMethodB(), 'SB:B');
    });
});
