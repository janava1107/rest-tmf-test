const axios = require('axios');

const otaGet = (req, res) => {
    console.log('otaget')
    
        res.json({
            val:'no existe get'
        });
        
}

const otaPost = (req, res) => {
    console.log('otapost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
    //console.log(token);
    
    switch(sn){
        
        case '56998125585':
            res.json(
                {
                    "status": "success", //estado ota dummy
                }
            )
            break;
            
        case '56933118533':
            res.json(
                {
                    "status": "success", //estado ota dummy
                }
            )
            break;    
        
        case '56961324725':
            res.json(
                {
                    "status": "limit", //estado ota dummy
                }
            )
            break;  
            
        case '56922033837':
            res.json(
                {
                    "status": "fail", //estado ota dummy
                }
            )
            break;    

        default:    
            res.json(
                {
                    "status": "fail", //estado ota dummy
                }
            )
    } 
    
     
    /*
    axios.get(process.env.URL_TMF+'/product_inventory/v2/product',{ headers: { Authorization: AuthStr,usermsisdn:sn } }).then(resp=> {
        
        res.json({
            sn,
            rating:resp.data[0].ratingType,
            status:resp.data[0].status,
            baseType:resp.data[0]['@baseType'],
            tenant_schemaLocation:resp.data[0].tenant['@schemaLocation'],
            tenant_type:resp.data[0].tenant['@type'],
            tenant:resp.data[0].tenant.id
        });
        
    })
    .catch((error) => {
        res.json(error);
    })
    .finally(() => {
        console.log('finalizado!!');
    }) 
    */
    
}

module.exports = {otaGet,otaPost};