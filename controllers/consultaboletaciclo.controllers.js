const axios = require('axios');
const logical=require('../logicaljs/logical');

const consultaboletacicloGet = (req, res) => {
    console.log('consultaboletacicloget')
    
    const {sn,ert} = req.query;
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
    axios.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io//customerBill/?serviceNumber='+sn).then(resp=> {
        //console.log(resp.data);
        res.json({
            sn,
            amountDue:resp.data.amountDue,
            billDate:logical.getTimestamptoDayMonth(resp.data.billDate),
            paymentDueDate:logical.getTimestamptoDayMonth(resp.data.paymentDueDate),
            remainingAmount:resp.data.remainingAmount,
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
    })
    
    
}

module.exports = {consultaboletacicloGet,consultaboletacicloPost};