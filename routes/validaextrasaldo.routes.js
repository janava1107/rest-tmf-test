const {Router} = require('express'); //desestructurar
const {validaExtrasaldoPost} = require('../controllers/extrasaldo.controllers');
const router = Router();

router.post('/',validaExtrasaldoPost);

module.exports = router;