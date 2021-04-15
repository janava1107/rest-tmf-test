const axios = require('axios');

const pinpukPost = (req, res) => {
    console.log('pinpukpost');
    const {sn} = req.body;
    const {token} =req.headers;
    const AuthStr = 'Bearer '+token;
    
    //console.log(token);
    
    switch(sn){
        
        
        case '56999999999':
            res.json(
                {

                    sn,
                    iccid: "31073009996725396927",
                    imsi: "730099967299592",
                    pin1: "1234",
                    pin2: "1234",
                    puk1: "39391811",
                    puk2: "85909670",
                    status:true
                }
            )
            break;
        
        case '561010101010':
            res.json(
                {

                    sn,
                    iccid: "31073009996725396927",
                    imsi: "730099967299592",
                    pin1: "5353538",
                    pin2: "1253538",
                    puk1: "32323811",
                    puk2: "123123123",
                    status:true
                }
            )
            break;    

        case '56920267605':
            res.json(
                {
                    sn,
                    iccid: "31073009996725396927",
                    imsi: "730099967299592",
                    pin1: "5678987",
                    pin2: "5454587",
                    puk1: "39391811",
                    puk2: "22222211",
                    status:true
                }
            )
            break;
        
        case '56955249972':
            res.json(
                {
                    sn,
                    iccid: "31073009996725396927",
                    imsi: "730099967299592",
                    pin1: "252525252",
                    pin2: "1234444",
                    puk1: "88887777",
                    puk2: "859096888870",
                    status:true
                }
            )
            break; 

        
        default:    
            res.json(
                {
                    sn,
                    iccid: "",
                    imsi: "",
                    pin1: "",
                    pin2: "",
                    puk1: "",
                    puk2: "",
                    status:false
                }
            )
    } 
    
}

module.exports = {pinpukPost};