const mysql = require('mysql')

module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'exapp',
    password: '123456',
    database: 'exapp'
  },
  sqlConnect: function (sql, sqlArr, callBack) {
    let pool = mysql.createPool(this.config)
    pool.getConnection((err, conn) => {
      if (err) {
        console.log('sqlConnect err')
        return
      }
      conn.query(sql, sqlArr, callBack)
      conn.release()
    })
  }
}