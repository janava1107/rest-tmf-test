const {Router} = require('express'); //desestructurar
const {authPost} = require('../controllers/auth.controllers');

const router = Router();

router.post('/login',authPost);

module.exports = router;