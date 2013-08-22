var StringsBasic = {
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {number}
     */
    subCount : function(str, sub) {
        var pos = 0;
        var counter = 0;
        
        while(true) {
            var foundPos = str.indexOf(sub, pos);
            if (foundPos == -1) break;
            else counter = counter + 1;
            
            pos = foundPos + 1;
        }
        
        return counter;
    },

    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array,<string>}
     */
    wordsContains : function(str, sub) {},
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array.<string>}
     */
    wordsNotContains : function(str, sub) {},
    /**
     * @param {string} str
     * @returns {Array.<string>}
     */
    wordsBeginCapital : function(str) {},
    /**
     * @param {string} str
     * @returns {boolean}
     */
    isPalindrome : function(str) {}
};
