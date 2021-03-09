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
    const {sn,tipo} = req.body;
    
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn).then(resp=> {
        
        let valor_tipo= tipo;
        //resp original
        res.json({
            //sn,
            //rating:resp.data.ratingType,
            rating:valor_tipo,
            status:resp.data.status,
            tenant_baseType:resp.data.tenant['@baseType'],
            tenant_schemaLocation:resp.data.tenant['@schemaLocation'],
            tenant_type:resp.data.tenant['@type'],
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

module.exports = {welcomeGet,welcomePost};