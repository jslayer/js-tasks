var StringsBasic = {
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {number}
     */
    subCount : function(str, sub) {
        return str.toLowerCase().split(sub.toLowerCase()).length - 1;
    },

    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array,<string>}
     */
    wordsContains : function(str, sub) {
        var array = str.split(" ");
        var result = [];
        var obj;
        for (var i in array) {
        if (array[i].search(sub) != -1) {
            obj = array[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
            result.push(obj);
        }
    }
    return result;
    },
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
