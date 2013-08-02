function extend(P, px, sx){
  var obj = new P();
  
  obj = function () {
	this.value = px[0];
  };
  
  obj.prototype = new P();
  obj.prototype.methodA = P.methodA;
  obj.prototype.methodB = px.methodB;
  obj.sMethodA = P.sMethodA;  
  obj.sMethodB = sx.sMethodB;  
  
return obj;
}
