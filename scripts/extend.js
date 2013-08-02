function extend(P, px, sx){
  var obj = function () {
  this.initialize();
  };
  obj.prototype.initialize = function () {
	this.value = px.value;
  };
  obj.prototype.methodA = P.methodA();
  obj.prototype.methodB = px.methodB();
  obj.sMethodA = function(){
	return P.sMethodA();
  };  
  obj.sMethodB = sx.sMethodB;
  
return obj;
}
