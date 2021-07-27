const axios = require('axios');

const validaExtrasaldoPost = (req, res) => {
    console.log('validaExtrasaldoPost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
    //console.log(token);
    
    switch(sn){
        
        case '56998125585':
            res.json(
                {
                    "valid": true, 
                }
            )
            break;
            

        default:    
            res.json(
                {
                    "status": false, 
                }
            )
    } 
    
}

const activaExtrasaldoPost = (req, res) => {
    console.log('activaExtrasaldoPost')
    const {sn,oprecarga,valrecarga} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;


        res.json({
            val:'entre al activa valor',
            sn,
            oprecarga,
            valrecarga
        });
        
}

module.exports = {validaExtrasaldoPost,activaExtrasaldoPost};