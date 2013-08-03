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
        var array = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split(" ");
        var result = [];
        for (var i in array) {
            if (array[i].toLowerCase().search(sub.toLowerCase()) != -1) {
                result.push(array[i]);
            }
        }
        return result;
    },
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array.<string>}
     */
    wordsNotContains : function(str, sub) {
        var array = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split(" ");
        var result = [];
        for (var i in array) {
            if (array[i].toLowerCase().search(sub.toLowerCase()) == -1) {
                result.push(array[i]);
            }
        }
        return result;
    },
    /**
     * @param {string} str
     * @returns {Array.<string>}
     */
    wordsBeginCapital : function(str) {
        var array = str.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split(" ");
        var result = [];
        for (var i in array) {
            var letter = array[i].substr(1);
            if (letter == letter.toUpperCase()) {
                result.push(array[i]);
            }
        }
        return result;
    },
    /**
     * @param {string} str
     * @returns {boolean}
     */
    isPalindrome : function(str) {
        if (str.toLowerCase() == str.split('').reverse().join('').toLowerCase()) {
            return true;
        }    
        return false;
    }
};
