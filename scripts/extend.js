function extend(P, px, sx){
  var obj;
  
  obj = function(){
            this.initialize();
        };

  obj.prototype.initialize = function(){
  this.value = px.value;
  };

  obj.prototype.methodA = function(){
	return 'A:A';
  };

  obj.prototype.methodB = function(){
	return px.methodB;
  };

  obj.sMethodA = function(){
	return 'SA:A';
  };

  obj.sMethodB = function(){
	return sx.sMethodB;
  };
  
return obj;
}
