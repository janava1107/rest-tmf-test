const {Router} = require('express'); //desestructurar
const {consultaconsumoGet,consultaconsumoPost} = require('../controllers/consultaconsumo.controllers');

const router = Router();

router.get('/',consultaconsumoGet);    

router.post('/',consultaconsumoPost);

module.exports = router;