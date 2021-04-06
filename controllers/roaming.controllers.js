const axios = require('axios');



const consultaroamingPost = (req, res) => {
    console.log('roamingpost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
    //console.log(token);
    
    switch(sn){
        
        case '56998125585':
            res.json(
                {
                    "status": "active",                 }
            )
            break;
            
        case '56933118533':
            res.json(
                {
                    "status": "inactive", 
                }
            )
            break;    
        
            
        default:    
            res.json(
                {
                    "status": "inactive", 
                }
            )
    } 
    
     
    
    
}

module.exports = {consultaroamingPost};