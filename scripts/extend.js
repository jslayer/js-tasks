function extend(P, px, sx){
var obj;
        obj = function(){
            this.initialize();
        };

        obj.prototype.initialize = function(){
            this.value = 'B:I';
        };

        obj.prototype.methodA = function(){
            return 'A:A';
        };

        obj.prototype.methodB = function(){
            return 'B:B';
        };

        obj.sMethodA = function(){
            return 'SA:A';
        };

        obj.sMethodB = function(){
            return 'SB:B';
        };
  
return obj;
}
