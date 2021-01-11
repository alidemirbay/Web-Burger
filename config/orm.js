const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableName, cb) {
        const queryString = " SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableName, column, value, cb) {
        const queryString = `INSERT INTO ${tableName} (${column}) VALUES ("${value}");`
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },
}
