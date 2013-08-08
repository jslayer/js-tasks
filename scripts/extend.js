function extend(P, px, sx){
        var obj = function () {
            P.call(this);
        };

        var oldProt = function () { };
        oldProt.prototype = P.prototype;
        obj.prototype = new oldProt();
        obj.prototype.constructor = obj;
        obj.superclass = P.prototype;

        for (var i in px) {
            obj.prototype[i] = px[i];

            if (i == 'constructor') {
                var pr = obj.prototype;
                obj = px[i];
                obj.prototype = pr;
                obj.prototype.constructor = obj;
            }

        }

        for (var idx in sx) {
            obj[idx] = sx[idx];
        }

        for (var item in P) {
            if (obj[item] == undefined) {
                obj[item] = P[item];
            }
        }

        return obj;
}
