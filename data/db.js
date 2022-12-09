const mySql=require("mysql2");
const config = require("../config")
let connection = mySql.createConnection(config.db)

connection.connect((err) =>{
  if(err){
    console.log(err)
  }

    console.log("mysql Bağlantısı yapıldı.")
  
})

module.exports = connection.promise();