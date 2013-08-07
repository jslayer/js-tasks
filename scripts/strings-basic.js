var StringsBasic = {
    /**
* @param {string} str
* @param {string} sub
* @returns {number}
*/
    subCount: function (str, sub) {
        return str.toLocaleLowerCase().split(sub.toLocaleLowerCase()).length - 1;
    },

    /**
* @param {string} str
* @param {string} sub
* @returns {Array,<string>}
*/
    wordsContains: function (str, sub) {
        var array = str.replace(/[&\/|\\#,+()$~%.'":*?!<>{}]/g, " ").split(" ");
        var result = [];
        for (var i in array) {
            if (array[i] != undefined) {
                if (array[i].toLowerCase().search(sub.toLowerCase()) != -1) {
                    result.push(array[i]);
                }
            }
        }
        return result;
    },
    /**
* @param {string} str
* @param {string} sub
* @returns {Array.<string>}
*/
    wordsNotContains: function (str, sub) {
        var array = str.replace(/[&\/|\\#,+()$~%.'":*?!<>{}]/g, " ").split(" ");
        var result = [];
        for (var i in array) {
            if (array[i].toLocaleLowerCase().search(sub.toLocaleLowerCase()) == -1) {
                result.push(array[i]);
            }
        }
        return result;
    },
    /**
* @param {string} str
* @returns {Array.<string>}
*/
    wordsBeginCapital: function (str) {
        var array = str.replace(/[&\/|\\#,+()$~%.'":*?!<>{}0-9]/g, " ").split(" ");
        var result = [];
        for (var i in array) {
            var letter = array[i].substr(0, 1);
            if (letter == letter.toUpperCase() && letter != '') {
                result.push(array[i]);
            }
        }
        return result;
    },
    /**
* @param {string} str
* @returns {boolean}
*/
    isPalindrome: function (str) {
        if (str.toLowerCase() == str.split('').reverse().join('').toLocaleLowerCase()) {
            return true;
        }
        return false;
    }
};
