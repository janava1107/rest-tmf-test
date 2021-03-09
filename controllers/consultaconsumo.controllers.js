const axios = require('axios');

const consultaconsumoGet = (req, res) => {
    console.log('consultaconsumoget')
    
    const {sn,ert} = req.query;
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io//usageConsumptionReport/?serviceNumber='+sn).then(resp=> {
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

const consultaconsumoPost = (req, res) => {
    console.log('consultaconsumopost');
    const {sn,ert} = req.body;
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/usageConsumptionReport/?serviceNumber='+sn).then(resp=> {
        //console.log(resp.data);
        res.json({
            sn,
            //objeto bucket
            bucket_type:resp.data.bucket[0]['@type'],
            bucket_name:resp.data.bucket[0].name,
            bucket_initialBalance:resp.data.bucket[0].intitalBalance,
            bucket_isUnlimited:resp.data.bucket[0].isUnlimited,
            bucket_usageType:resp.data.bucket[0].usageType,
            
            //objeto bucket->bucketBalance
            bucketBalance_remainingBalanceName:resp.data.bucket[0].bucketBalance[0].remainingValueName,
            bucketBalance_remainingBalanceAmount:resp.data.bucket[0].bucketBalance[0].remainingValue.amount,
            
            //objeto tenant
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

module.exports = {consultaconsumoGet,consultaconsumoPost};