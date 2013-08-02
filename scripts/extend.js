function extend(P, px, sx){
    var result;
    var obj = function() {
        P.call(this);
    };
    
    obj.prototype = new P();
    obj.prototype.initialize = function() { px.initialize.call(this); };
    obj.prototype.methodB = function () { px.methodB.call(this); };
    obj.prototype.sMethodB = function () { sx.sMethodB.call(this); };

    return result = new obj();
}
