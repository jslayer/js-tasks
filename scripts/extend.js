function extend(P, px, sx) {
  var obj = function() {
    P.call(this);
  };
  
  obj.prototype = new P();
  
  for(var i in px)
    obj.prototype[i] = px[i];
    
  for(var id in sx)
    obj[id] = sx[id];
    
  for(var ide in P) {
    if(obj[ide] == undefined) 
       obj[ide] = P[ide];
  }
    
  return obj;
}
