const {Router} = require('express'); //desestructurar
const {consultaboletacicloGet,consultaboletacicloPost} = require('../controllers/consultaboletaciclo.controllers');

const router = Router();

router.get('/',consultaboletacicloGet);    

router.post('/',consultaboletacicloPost);

module.exports = router;