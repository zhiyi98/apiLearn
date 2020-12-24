let express = require('express');
let router = express.Router();
let cate = require('../controllers/cateController')

/* GET home page. */
router.get('/getCate', cate.getCate);
router.get('/getPostCate', cate.getPostCate);

module.exports = router;
