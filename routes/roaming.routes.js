const {Router} = require('express'); //desestructurar
const {consultaroamingPost} = require('../controllers/roaming.controllers');

const router = Router();


router.post('/',consultaroamingPost);

module.exports = router;