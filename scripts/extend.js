function extend(P, px, sx){
    var obj = function() {
        P.call(this);
    };
    
    obj.prototype = new P();
    obj.prototype.initialize = function() { px.initialize.call(this); };
    obj.prototype.methodB = function () { return px.methodB.call(this); };
    obj.sMethodA = function () { return P.sMethodA(); };
    obj.sMethodB = function () { return sx.sMethodB.call(this); };

    return obj;
}
