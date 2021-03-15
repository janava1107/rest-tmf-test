const axios = require('axios');

const consultaconsumoGet = (req, res) => {
    console.log('consultaconsumoget')
    
    const {sn,ert} = req.query;
    
    
    /*
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/usageConsumptionReport/?serviceNumber='+sn).then(resp=> {
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
    })*/
}

const consultaconsumoPost = (req, res) => {
    console.log('consultaconsumopost');
    const {sn,ert} = req.body;

    switch(sn){
        //data
        case '56999999999':
            res.json({
                "sn": "56999999999",
                "tenant_id": "WOM-Chile",
            
                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,
            
                "bucket_usageType_voice": "",
                "bucket_initialBalance_voice": "",
                "bucketBalance_remainingBalanceAmount_voice": "",
                "bucket_name_voice": "",
                "bucket_isUnlimited_voice": false,
            
                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,
            
                "bucket_usageType_sms": "",
                "bucket_initialBalance_sms": "",
                "bucketBalance_remainingBalanceAmount_sms": "",
                "bucket_name_sms": "",
                "bucket_isUnlimited_sms": false,
            
                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;

        //data-voice    

        case '56888888888':
            res.json({
                "sn": "56888888888",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88Min",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                "bucket_usageType_sms": "",
                "bucket_initialBalance_sms": "",
                "bucketBalance_remainingBalanceAmount_sms": "",
                "bucket_name_sms": "",
                "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break; 

        //Data-voice-currency
        case '56777777777':
            res.json({
                "sn": "56777777777",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88Min",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                "bucket_usageType_sms": "",
                "bucket_initialBalance_sms": "",
                "bucketBalance_remainingBalanceAmount_sms": "",
                "bucket_name_sms": "",
                "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;
        
        //Data-voice-currency-sms    
        case '56666666666':
            res.json({
                "sn": "56666666666",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88Min",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "Data currency",
                "bucket_isUnlimited_currency": false,

                "bucket_usageType_sms": "SMS",
                "bucket_initialBalance_sms": "100",
                "bucketBalance_remainingBalanceAmount_sms": "98",
                "bucket_name_sms": "Data sms",
                "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;
            
        case '56555555555':
            res.json({
                "sn": "56555555555",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": true,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88Min",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": true,

                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                "bucket_usageType_sms": "",
                "bucket_initialBalance_sms": "",
                "bucketBalance_remainingBalanceAmount_sms": "",
                "bucket_name_sms": "",
                "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break; 

        default:
            res.json({
                "sn": "56555555555",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8GB",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": true,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88Min",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": true,

                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                "bucket_usageType_sms": "",
                "bucket_initialBalance_sms": "",
                "bucketBalance_remainingBalanceAmount_sms": "",
                "bucket_name_sms": "",
                "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
        }        


    /*axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/usageConsumptionReport/?serviceNumber='+sn).then(resp=> {
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
    }) */
    
    
}

module.exports = {consultaconsumoGet,consultaconsumoPost};