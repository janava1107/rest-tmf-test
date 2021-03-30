const axios = require('axios');

const welcomeGet = (req, res) => {
    console.log('welcomeget')
    
    const {sn} = req.query;
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn).then(resp=> {
        
        res.json({
            //msg: 'endpoint post',
            sn,
            //canal,
            rating:resp.data.ratingType,
            status:resp.data.status,
            tenant:resp.data.tenant.id
        });

        
        
    })
    .catch((error) => {
        res.json(error);
    })
    .finally(() => {
        console.log('finalizado!!');
    })
}

const welcomePost = (req, res) => {
    console.log('welcomepost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
    //console.log(token);
    
    switch(sn){
        
        
        case '56999999999':
            res.json(
                {

                    "sn":sn,
                    "token":token,
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Hybrid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;
        
        case '561010101010':
            res.json(
                {

                    "sn":sn,
                    "token":token,
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Hybrid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;    

        case '56920267605':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Prepaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;
        
        case '56955249972':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Postpaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break; 

        case '56988243100':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Postpaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;
            
        case '56950298956':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Postpaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;    

            
        case '56933118533':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Postpaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;     
        
        case '56666666666':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "inactive",
                    "rating": "Postpaid",
                    "tenant_type": "",
                    "tenant_baseType": "",
                    "tenant": ""
                }
            )
            break;    
        //clavistel es Claro-Virgin-Entel        
        case '56555555555':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "",
                    "rating": "",
                    "tenant_type": "",
                    "tenant_baseType": null,
                    "tenant": "Clavistel"
                }
            )
            break;        
        
        case '56998125585':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Postpaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break; 
        
        case '56961324725':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Hybrid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;  
              
        case '56922033837':
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "active",
                    "rating": "Prepaid",
                    "tenant_type": "WOMTenantRefOrValue",
                    "tenant_baseType": null,
                    "tenant": "WOM-Chile"
                }
            )
            break;    

        default:    
            res.json(
                {
                    "tenant_schemaLocation": "urn:wom:ProductInventory:/schema/2.0.0",
                    "status": "inactive",
                    "rating": "Postpaid",
                    "tenant_type": "",
                    "tenant_baseType": "",
                    "tenant": ""
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

module.exports = {welcomeGet,welcomePost};