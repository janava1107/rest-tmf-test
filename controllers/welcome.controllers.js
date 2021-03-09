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
        
        //cambiar por case comentado y ajustar cloud function
        switch(tipo){
        //switch(resp.data.ratingType){
            case 'Hybrid':
                var ratingType='Hybrid';
                var status=resp.data.status;
                var baseType=resp.data.tenant['@baseType'];
            break;
            case 'pre':
                var ratingType='Prepay';
                var status=resp.data.status;
                var baseType=resp.data.tenant['@baseType'];
            break;
            case 'post':
                var ratingType='Postpay';
                var status=resp.data.status;
                var baseType=resp.data.tenant['@baseType'];
            break;        
        }
        
        //resp original
        res.json({
            sn,
             rating:'Hybrid',
            // status:status,
            // tenant_baseType:baseType,
            // tenant_schemaLocation:resp.data.tenant['@schemaLocation'],
            // tenant_type:resp.data.tenant['@type'],
            // tenant:resp.data.tenant.id
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