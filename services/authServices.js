
const connection = require('./../config/databaseconnection')
const {
    QueryTypes
} = require('sequelize');


exports.data_enter = async function (subject, content, cb) {
    const data = connection.sequelize.query("insert into queries (subject,content) values ('" + subject + "','" + content + "')")
    if (data) {
        cb(null, data)
    } else {
        cb("data not saved", null)
    } 


}

exports.get_data = async function (cb) {
    const data = await connection.sequelize.query("select * from queries ORDER BY id DESC",
     { type: QueryTypes.SELECT
    });
    if (data) {
        cb(null, data)
    } else {
        cb("data not saved", null)
    } 


}
