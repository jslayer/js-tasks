function extend(P, px, sx) {
  var obj = function() {
    P.call(this);
  };
  
  var F = function () { };
  F.prototype = P.prototype;
  obj.prototype = new F();
  obj.prototype.constructor = obj;
  obj.superclass = P.prototype;
  
  for(var i in px) {
    obj.prototype[i] = px[i];
    
    if (i == 'constructor') {
      var proto = obj.prototype;
      obj = px[i];
      obj.prototype = proto;
      obj.prototype.constructor = obj;
    }
  }
    
  for(var id in sx)
    obj[id] = sx[id];
    
  for(var ide in P) {
    if(obj[ide] == undefined) 
       obj[ide] = P[ide];
  }
    
  return obj;
}
