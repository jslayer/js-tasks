function extend(P, px, sx){
  var E = function() { this.constructor(arguments)},
    buf = function() {},
    prop;

  buf.prototype = P.prototype;
  E.prototype = new buf;

  for(prop in P) {
    E[prop] = P[prop];
  }
  for(prop in px) {
    E.prototype[prop] = px[prop];
  }
  for(prop in sx) {
    E[prop] = sx[prop];
  }

  return E;
}