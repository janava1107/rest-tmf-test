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
    

    //caso productivo
    /*axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io//customerBill/?serviceNumber='+sn).then(resp=> {
        res.json({
            sn,
            amountDue:resp.data.amountDue.replace("CLP",""),
            billDate:logical.getTimestamptoDayMonth(resp.data.billDate),
            paymentDueDate:logical.getTimestamptoDayMonth(resp.data.paymentDueDate),
            remainingAmount:resp.data.remainingAmount.replace("CLP",""),
            //objeto billCycle
            billcycle_name:resp.data.billCycle.name,
            //objeto billDocument
            billdocument_attachmentType:resp.data.billDocument[0].attachmentType,
            billdocument_url:resp.data.billDocument[0].url,
            //objeto billingPeriod
            billperiod_startdate:logical.getTimestamptoDayMonth(resp.data.billingPeriod.startDateTime),
            billperiod_enddate:logical.getTimestamptoDayMonth(resp.data.billingPeriod.endDateTime),
            //objeto tenant
            tenant_schemalocation:resp.data.tenant['@schemaLocation'],
            
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