var StringsBasic = {
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {number}
     */
    subCount : function(str, sub) {
        if( (arguments.length == 0) || (arguments.length == 1) || (arguments.length > 2) )  return str;

        var pos = 0;
        var counter = 0;

        str = str.toLowerCase();
        
        while(true) {
            var foundPos = str.indexOf(sub, pos);
            if (foundPos == -1) break;
            counter = counter + 1;
            pos = foundPos + 1;
        }
        
        return counter;
    },

    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array,<string>}
     */
    wordsContains : function(str, sub) {
        if( (arguments.length == 0) || (arguments.length == 1) || (arguments.length > 2) )  return str;
        var pattern = '\\w*' + sub + '\\w*';
        var reg = new RegExp(pattern, 'gi');
        return str.match(reg);
    },
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array.<string>}
     */
    wordsNotContains : function(str, sub) {
        if( (arguments.length == 0) || (arguments.length == 1) || (arguments.length > 2) ) return str;
        var separator = '[а-яёa-z]';
        var pattern = separator + '*' + sub + separator + '*';
        var reg = new RegExp(pattern, 'gi');
        var arr = str.replace(reg, '');
        reg = new RegExp(separator + '+', 'gi');
        arr = arr.match(reg)||[];
        return arr;
    },
    /**
     * @param {string} str
     * @returns {Array.<string>}
     */
    wordsBeginCapital : function(str) {
        if( (arguments.length == 0) || (arguments.length > 1) )  return str;
        var pattern = '[A-Z][a-z]*' ;
        var reg = new RegExp(pattern, 'g');
        return str.match(reg);
    },
    /**
     * @param {string} str
     * @returns {boolean}
     */
    isPalindrome : function(str) {
        if( (arguments.length == 0) || (arguments.length > 1) ) return str;
        str = str.toLowerCase();
        return str === str.split("").reverse().join("");
    }
};
