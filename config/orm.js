const connection = require("../config/connection.js");

const orm = {
    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table} ;`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (table, col, val, cb) {
        const queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}");`
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    updateOne: function (table, col, cond, val, cb) {
        const queryString = `UPDATE ${table} SET ${col}=${cond} WHERE id=${val};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;