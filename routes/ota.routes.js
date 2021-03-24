const {Router} = require('express'); //desestructurar
const {otaGet,otaPost} = require('../controllers/ota.controllers');

const router = Router();

router.get('/',otaGet);    

router.post('/',otaPost);

module.exports = router;