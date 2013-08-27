function extend(P, px, sx) {
  return function() {
       this.initialize = px.initialize;   
       this.initialize();
       this.MethodB = px.MethodB;
       this.sMethodB = sx.sMethodB;
  };
}
