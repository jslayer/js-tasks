function extend(P, px, sx){
  var obj = P;
  obj.methodB = px.methodB;
  obj.initialize.value = px.initialize.value;
  obj.sMethodB = sx.sMethodB;
return obj;
}
