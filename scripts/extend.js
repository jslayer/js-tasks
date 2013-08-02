function extend(P, px, sx){
  var parent = new P();
  var obj = function () {
	this.initialize();
  };
  obj.prototype.initialize = function () {
	this.value = px.value;
  };
  obj.prototype.methodA = parent.methodA;
  obj.prototype.methodB = px.methodB;
  obj.sMethodA = parent.sMethodA;  
  obj.sMethodB = sx.sMethodB;
  
return obj;
}
