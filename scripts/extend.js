function extend(P, px, sx){

    var child = function() {this.constructor.prototype.constructor.call(this)};
    child.prototype = new P();

    for (property in P) {
        child[property] = P[property];
    }
    for (property in px) {
        child.prototype[property] = px[property];
    }
    for (property in sx) {
        child[property] = sx[property];
    }

    return child;
}