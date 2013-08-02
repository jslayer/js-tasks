function extend(P, px, sx){
  var obj;
  
  obj.prototype = new P();
  
  obj = function(){
    this.initialize();
  };
  
  obj.prototype.initialize = px.initialize;

  obj.prototype.methodA = P.methodA;
  obj.prototype.methodB = px.methodB;
  obj.sMethodA = P.sMethodA;  
  obj.sMethodB = sx.sMethodB;  
  //test
  
return obj;
}
