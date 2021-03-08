const axios = require('axios');

const welcomeGet = (req, res) => {
    console.log('welcomeget')
    
    const {sn} = req.query;
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn).then(resp=> {
        console.log('rating: ',resp.data.ratingType);
        console.log('estado: ',resp.data.status);
        console.log('tenant: ',resp.data.tenant.id);
        
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
    const {sn,canal} = req.body;
    
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn).then(resp=> {
        //console.log('rating: ',resp.data.ratingType);
        //console.log('estado: ',resp.data.status);
        //console.log('tenant_baseType: ',resp.data.tenant['@baseType']);
        //console.log('tenant_schemaLocation: ',resp.data.tenant['@schemaLocation']);
        //console.log('tenant_type: ',resp.data.tenant['@type']);
        //console.log('tenant_id: ',resp.data.tenant.id);
        
        res.json({
            sn,
            rating:resp.data.ratingType,
            status:resp.data.status,
            tenant_baseType:resp.data.tenant['@baseType'],
            tenant_schemaLocation:resp.data.tenant['@schemaLocation'],
            tenant_type:resp.data.tenant['@type'],
            tenant_id:resp.data.tenant.id
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