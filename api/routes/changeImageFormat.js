const router = require('express').Router();
const ChangeImageFormatCtrl = require('../controllers/changeImageFormat');

router.get('/:fileName', ChangeImageFormatCtrl.get);
router.post('/', ChangeImageFormatCtrl.post);

module.exports = router;
