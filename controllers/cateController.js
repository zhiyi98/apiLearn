let dbConfig = require('../util/dbconfig.js')

getCate = (req, res) => {
  let sql = "select * from cate"
  let sqlArr = []
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错')
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

getPostCate = (req, res) => {
  let { id } = req.query
  let sql = `select * from post where id=?`
  let sqlArr = [id]
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错了')
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getCate,
  getPostCate
}