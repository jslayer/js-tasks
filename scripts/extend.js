function extend(P, px, sx){

    function extendInner(Child, Parent) {
        var F = function() {  };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;


    }


    var child = function() {child.superclass.constructor.apply(this, arguments)};
    extendInner(child, P);

    for (property in P) {
        child[property] = P[property];
    }
    for (property in px) {
        switch (property) {
            case 'constructor':
                var oldProto = child.prototype;
                child = px[property];
                child.prototype = oldProto;
                child.prototype.constructor = child;
                break
            default:
                child.prototype[property] = px[property];
                break
        }

    }
    for (property in sx) {
        child[property] = sx[property];
    }

    return child;
}