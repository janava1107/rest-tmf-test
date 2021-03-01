const {Router} = require('express'); //desestructurar
const {welcomeGet,welcomePost} = require('../controllers/welcome.controllers');

const router = Router();

router.get('/',welcomeGet);    

router.post('/',welcomePost);

module.exports = router;