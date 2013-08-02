function extend(P, px, sx){
  var obj = function () {
    this.initialize();
  };
  obj.prototype.initialize = function () {
    this.value = 'test';
  };
  obj.prototype = new P();
  obj.prototype.methodA = P.methodA;
  obj.prototype.methodB = px.methodB;
  obj.sMethodA = P.sMethodA;  
  obj.sMethodB = sx.sMethodB;
  
return obj;
}
