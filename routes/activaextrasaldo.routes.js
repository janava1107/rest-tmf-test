const {Router} = require('express'); //desestructurar
const {activaExtrasaldoPost} = require('../controllers/extrasaldo.controllers');

const router = Router();

router.post('/',activaExtrasaldoPost);      


module.exports = router;