const request = require('request');

const welcomeGet = (req, res) => {
    
    
    console.log('welcomeget')
    
    //const {sn,canal} = req.query;
    const {sn} = req.query;
    request.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn, function (error, resp, body) {
        
        if (!error && resp.statusCode === 200) {

            resp_tmf = JSON.parse(body);
            console.log('rating: ',resp_tmf.ratingType);
            console.log('estado: ',resp_tmf.status);
            console.log('tenant: ',resp_tmf.tenant.id);
            
            res.json({
                //msg: 'endpoint post',
                sn,
                //canal,
                rating:resp_tmf.ratingType,
                status:resp_tmf.status,
                tenant:resp_tmf.tenant.id
            });

        }else{
            res.json(error);
        }    
        
    });
}

const welcomePost = (req, res) => {
    console.log('welcomepost');
    const {sn,canal} = req.body;
    
    request.get('https://2c7b355e-3990-42fb-994b-e34ad6bb1887.mock.pstmn.io/product/?serviceNumber='+sn, function (error, resp, body) {
        
        if (!error && resp.statusCode === 200) {

            resp_tmf = JSON.parse(body);
            console.log('rating: ',resp_tmf.ratingType);
            console.log('estado: ',resp_tmf.status);
            console.log('tenant: ',resp_tmf.tenant.id);
            
            res.json({
                //msg: 'endpoint post',
                sn,
                canal,
                rating:resp_tmf.ratingType,
                status:resp_tmf.status,
                tenant:resp_tmf.tenant.id
            });

        }else{
            res.json(error);
        }    
        
    });
    
    
}

module.exports = {welcomeGet,welcomePost};