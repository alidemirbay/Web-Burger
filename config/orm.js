const connection = require("../config/connection.js");

// Creates object 
const orm = {
    // Action SelectAll
    selectAll: function (tableName, cb) {
        const queryString = " SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
}
