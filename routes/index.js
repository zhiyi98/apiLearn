let express = require('express');
let router = express.Router();
let dbConfig = require('../util/dbconfig.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  /**
   * 改写
   */
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
});

module.exports = router;
