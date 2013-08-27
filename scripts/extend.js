function extend(P, px, sx) {
  return function() {
       this.initialize = px.initialize;   
       this.initialize();
       this.prototype.MethodB = px.MethodB;
       this.sMethodB = sx.sMethodB;
  };
}
