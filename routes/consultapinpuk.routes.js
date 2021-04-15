const {Router} = require('express'); //desestructurar
const {pinpukPost} = require('../controllers/consultapinpuk.controllers');

const router = Router();

router.post('/',pinpukPost);

module.exports = router;