const axios = require('axios');
const logical=require('../logicaljs/logical');

const consultaboletacicloGet = (req, res) => {
    console.log('consultaboletacicloget')
    const {sn,ert} = req.query


    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io//customerBill/?serviceNumber='+sn).then(resp=> {
        res.json({
            //msg: 'endpoint post',
            sn,
            //canal,
        });

    })
    .catch((error) => {
        res.json(error);
    })
    .finally(() => {
        console.log('finalizado!!');
    })
}

const consultaboletacicloPost = (req, res) => {
    console.log('consultaboletaciclopost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;

    
    //caso prueba
    switch(sn){
        case '56999999999':
            res.json(
                {
                    "billdocument_attachmentType": "application/pdf",
                    "billperiod_enddate": "23/03",
                    "remainingAmount": "7000",
                    "billcycle_name": "Bill Cycle for March 2021",
                    "billDate": "25/03",
                    "billperiod_startdate": "23/02",
                    "amountDue": "10000",
                    "tenant_schemalocation": "urn:wom:CustomerBill:/schema/2.0.0",
                    "billdocument_url": "/link/to/pdf/document.pdf",
                    "paymentDueDate": "23/03",
                    "billstate": "vigente"
                }
            )
            break;

        case '56888888888':
            res.json(
                {
                    "billdocument_attachmentType": "application/pdf",
                    "billperiod_enddate": "23/01",
                    "remainingAmount": "9000",
                    "billcycle_name": "Bill Cycle for March 2019",
                    "billDate": "25/01",
                    "billperiod_startdate": "23/12",
                    "amountDue": "13000",
                    "tenant_schemalocation": "urn:wom:CustomerBill:/schema/2.0.0",
                    "billdocument_url": "/link/to/pdf/document.pdf",
                    "paymentDueDate": "23/01",
                    "billstate": "vencida"
                }
            )
            break;
        
        case '56777777777':
            res.json(
                {
                    "billdocument_attachmentType": "",
                    "billperiod_enddate": "",
                    "remainingAmount": "",
                    "billcycle_name": "",
                    "billDate": "",
                    "billperiod_startdate": "",
                    "amountDue": "",
                    "tenant_schemalocation": "",
                    "billdocument_url": "",
                    "paymentDueDate": "",
                    "billstate": "sinboleta"
                }
            )
            break; 
            
        default:    
            res.json(
                {
                    "billdocument_attachmentType": "",
                    "billperiod_enddate": "",
                    "remainingAmount": "",
                    "billcycle_name": "",
                    "billDate": "",
                    "billperiod_startdate": "",
                    "amountDue": "",
                    "tenant_schemalocation": "",
                    "billdocument_url": "",
                    "paymentDueDate": "",
                    "billstate": "sinboleta"
                }
            )
    }
    
    //REVISAR BILLDOCUMENT PARA MÁS DE UN OBJETO (no tengo ejemplo)
    //caso productivo
    /*axios.get('https://api-staging.wom.aaxis-devops.net/customer_bill/v2/customerBill?serviceNumber='+sn,{ headers: { Authorization: AuthStr} }).then(resp=> {
        res.json({
            sn,
            billdocument_attachmentType: resp.data[0].billDocument.attachmentType,
            billDate: logical.getTimestamptoDayMonth(resp.data[0].billDate),
            billperiod_startdate: logical.getTimestamptoDayMonth(resp.data[0].billingPeriod.startDateTime),
            billperiod_enddate: logical.getTimestamptoDayMonth(resp.data[0].billingPeriod.endDateTime),
            paymentDueDate: logical.getTimestamptoDayMonth(resp.data[0].paymentDueDate),
            remainingAmount: resp.data[0].remainingAmount.value,
            billcycle_name: resp.data[0].billCycle.name,
            amountDue: resp.data[0].amountDue.value,
            tenant_schemalocation: resp.data[0].tenant['@schemaLocation'],
            billdocument_url: resp.data[0].billDocument[0].url,
            billstate: logical.getCompareDateToNow(resp.data[0].billingPeriod.endDateTime)
            
        });

        
        
    })
    .catch((error) => {
        res.json(error);
    })
    .finally(() => {
        console.log('finalizado!!');
    })*/
    
    
}

module.exports = {consultaboletacicloGet,consultaboletacicloPost};