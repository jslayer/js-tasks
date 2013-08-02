function extend(P, px, sx){
  var obj = P;
  obj.methodB = px.methodB;
	obj.value = px.value;
	obj.sMethodB = sx.sMethodB;
return obj;
}
