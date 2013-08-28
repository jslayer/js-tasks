function extend(P, px, sx) {
  var obj = function() {
    P.call(this);
  };
  obj.prototype = new P();
  
  for(var i in px)
    obj.prototype[i] = px[i];
    
  for(var id in sx)
    obj[i] = sx[i];
    
  return obj;
}
