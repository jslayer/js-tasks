function extend(P, px, sx){
  var obj; 
  obj.prototype.initialize = function () {
    this.value = px.value;
    obj.prototype.methodA = P.methodA;
    obj.prototype.methodB = px.methodB;
    obj.sMethodA = P.sMethodA;  
    obj.sMethodB = sx.sMethodB;
  };
  
return obj;
}
