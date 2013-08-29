//todo - implement

(function() {
  var oldSort = Array.prototype.sort;
  
  Array.prototype.sort = function() {
    for( var i = 0; i < this.length - 1; i++ ) {
        var min = i;

        for( var j = i + 1; j < this.length; j++ )
        { if ( this[j] < this[min] ) min = j; }

        var temp = this[min];
        this[min] = this[i];
        this[i] = temp;
    }
    
    Array.prototype.sort = oldSort;

    return this;

  };
  
 }())
