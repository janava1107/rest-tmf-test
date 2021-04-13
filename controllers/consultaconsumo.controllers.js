const axios = require('axios');

const consultaconsumoGet = (req, res) => {
    console.log('consultaconsumoget')
    
    const {sn,ert} = req.query;
    
}

const consultaconsumoPost = (req, res) => {
    console.log('consultaconsumopost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
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
            
                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,
            
                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;

        //data-voice    
        
        case '56920267605':
            res.json({
                "sn": "56920267605",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "",
                "bucket_initialBalance_voice": "",
                "bucketBalance_remainingBalanceAmount_voice": "0",
                "bucket_name_voice": "",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break; 

        //Data-voice-currency
        case '56961324725':
            res.json({
                "sn": "56961324725",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                //"bucket_usageType_sms": "",
                //"bucket_initialBalance_sms": "",
                //"bucketBalance_remainingBalanceAmount_sms": "",
                //"bucket_name_sms": "",
                //"bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;

        //Data-voice-currency
        case '56955249972':
            res.json({
                "sn": "56955249972",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                //"bucket_usageType_sms": "",
                //"bucket_initialBalance_sms": "",
                //"bucketBalance_remainingBalanceAmount_sms": "",
                //"bucket_name_sms": "",
                //"bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;
            
            
            //Data-voice-currency
        case '56988243100':
            res.json({
                "sn": "56988243100",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                //"bucket_usageType_sms": "",
                //"bucket_initialBalance_sms": "",
                //"bucketBalance_remainingBalanceAmount_sms": "",
                //"bucket_name_sms": "",
                //"bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;


            //Data-voice-currency
        case '56950298956':
            res.json({
                "sn": "56950298956",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                //"bucket_usageType_sms": "",
                //"bucket_initialBalance_sms": "",
                //"bucketBalance_remainingBalanceAmount_sms": "",
                //"bucket_name_sms": "",
                //"bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;
            
        
        //Data-voice-currency-sms    
        case '56998125585':
            res.json({
                "sn": "56998125585",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "0",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "SMS",
                // "bucket_initialBalance_sms": "100",
                // "bucketBalance_remainingBalanceAmount_sms": "98",
                // "bucket_name_sms": "Data sms",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;
            
        case '56933118533':
            res.json({
                "sn": "56933118533",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "8",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": true,

                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "88",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": true,

                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "0",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break; 
        
        case '56444444444':
        res.json({
            "sn": "56444444444",
            "tenant_id": "WOM-Chile",

            "bucket_usageType_data": "Data",
            "bucket_initialBalance_data": "10GB",
            "bucketBalance_remainingBalanceAmount_data": "8",
            "bucket_name_data": "10Gigas of Data",
            "bucket_isUnlimited_data": true,

            "bucket_usageType_voice": "Voice",
            "bucket_initialBalance_voice": "100Min",
            "bucketBalance_remainingBalanceAmount_voice": "0",
            "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
            "bucket_isUnlimited_voice": false,

            "bucket_usageType_currency": "",
            "bucket_initialBalance_currency": "",
            "bucketBalance_remainingBalanceAmount_currency": "0",
            "bucket_name_currency": "",
            "bucket_isUnlimited_currency": false,

            // "bucket_usageType_sms": "",
            // "bucket_initialBalance_sms": "",
            // "bucketBalance_remainingBalanceAmount_sms": "",
            // "bucket_name_sms": "",
            // "bucket_isUnlimited_sms": false,

            "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
        })
            break; 


        case '56333333333':
            res.json({
                "sn": "56333333333",
                "tenant_id": "WOM-Chile",
    
                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "0",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": true,
    
                "bucket_usageType_voice": "Voice",
                "bucket_initialBalance_voice": "100Min",
                "bucketBalance_remainingBalanceAmount_voice": "0",
                "bucket_name_voice": "10Gigas of Data and 100Min of Voice",
                "bucket_isUnlimited_voice": false,
    
                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "0",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,
    
                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,
    
                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
                break;
                
        case '56222222222':
            res.json({
                "sn": "56222222222",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "0",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "",
                "bucket_initialBalance_voice": "",
                "bucketBalance_remainingBalanceAmount_voice": "0",
                "bucket_name_voice": "",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "11500",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;    
            
        case '56111111111':
            res.json({
                "sn": "56111111111",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "Data",
                "bucket_initialBalance_data": "10GB",
                "bucketBalance_remainingBalanceAmount_data": "0",
                "bucket_name_data": "10Gigas of Data",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "",
                "bucket_initialBalance_voice": "",
                "bucketBalance_remainingBalanceAmount_voice": "0",
                "bucket_name_voice": "",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "Currency",
                "bucket_initialBalance_currency": "13000",
                "bucketBalance_remainingBalanceAmount_currency": "0",
                "bucket_name_currency": "Lucas del currency",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
            break;    


        default:
            res.json({
                "sn": "56000000000",
                "tenant_id": "WOM-Chile",

                "bucket_usageType_data": "",
                "bucket_initialBalance_data": "",
                "bucketBalance_remainingBalanceAmount_data": "0",
                "bucket_name_data": "",
                "bucket_isUnlimited_data": false,

                "bucket_usageType_voice": "",
                "bucket_initialBalance_voice": "",
                "bucketBalance_remainingBalanceAmount_voice": "0",
                "bucket_name_voice": "",
                "bucket_isUnlimited_voice": false,

                "bucket_usageType_currency": "",
                "bucket_initialBalance_currency": "",
                "bucketBalance_remainingBalanceAmount_currency": "0",
                "bucket_name_currency": "",
                "bucket_isUnlimited_currency": false,

                // "bucket_usageType_sms": "",
                // "bucket_initialBalance_sms": "",
                // "bucketBalance_remainingBalanceAmount_sms": "",
                // "bucket_name_sms": "",
                // "bucket_isUnlimited_sms": false,

                "tenant_schemaLocation": "urn:wom:UsageConsumption:/schema/2.0.0"
            })
        }   
        
        


    /*    
    axios.get('https://api-staging.wom.aaxis-devops.net/usage_consumption/v2/usageConsumptionReport',{ headers: { Authorization: AuthStr,usermsisdn:sn }}).then(resp=> {
        //console.log(resp.data[0]);
        
        const consumerPre={
            sn,
            tenant_id:resp.data[0].tenant.id,
            tenant_schemaLocation:resp.data[0].tenant['@schemaLocation']
        };

        var consumerCurrency ={};
        var consumerVoice ={};
        var consumerSms ={};
        var consumerData ={};

        resp.data[0].bucket.forEach(value => {
            //console.log(value.usageType);
        
            if(value.usageType == '1'){ //currency
                consumerCurrency = {
                    bucket_usageType_currency:'Currency',
                    bucket_initialBalance_currency:value.initialBalance,
                    bucketBalance_remainingBalanceAmount_currency:value.bucketBalance[0].remainingValue.amount,
                    bucket_name_currency:value.name,
                    bucket_isUnlimited_currency:value.isUnlimited,
                }
            }
            //console.log(consumerCurrency);

            if(value.usageType == '2'){ //sms
                consumerSms = {
                    bucket_usageType_sms:'SMS',
                    bucket_initialBalance_sms:value.initialBalance,
                    bucketBalance_remainingBalanceAmount_sms:value.bucketBalance[0].remainingValue.amount,
                    bucket_name_sms:value.name,
                    bucket_isUnlimited_sms:value.isUnlimited,
                }
            }

            if(value.usageType == '3'){//voice
                consumerVoice = {
                    bucket_usageType_voice:'SMS',
                    bucket_initialBalance_voice:value.initialBalance,
                    bucketBalance_remainingBalanceAmount_voice:value.bucketBalance[0].remainingValue.amount,
                    bucket_name_voice:value.name,
                    bucket_isUnlimited_voice:value.isUnlimited,
                }
            }

            if(value.usageType == '4'){//data
                consumerData = {
                    bucket_usageType_data:'Data',
                    bucket_initialBalance_data:value.initialBalance,
                    bucketBalance_remainingBalanceAmount_data:value.bucketBalance[0].remainingValue.amount,
                    bucket_name_data:value.name,
                    bucket_isUnlimited_data:value.isUnlimited,
                }
            }

        })
        //console.log(consumerCurrency);
        const consumerAll={...consumerPre,...consumerCurrency,...consumerSms,...consumerVoice,...consumerData}
        //console.log(consumerAll);
        res.json(consumerAll);
        
    })
    .catch((error) => {
        res.json(error);
    })
    .finally(() => {
        console.log('finalizado!!');
    }) */
    
    
}

module.exports = {consultaconsumoGet,consultaconsumoPost};