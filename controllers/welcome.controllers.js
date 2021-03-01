//const { response } = require('express');

const welcomeGet = (req, res) => {
    console.log('welcomeget')
    
    const {id,canal} = req.query;
    res.json({
        msg: 'endpoint get',
        id,
        canal
    });
}

const welcomePost = (req, res = response) => {
    console.log('welcomepost')
    
    const {id,canal} = req.body;

    res.json({
        msg: 'endpoint post',
        id,
        canal
    });
}

module.exports = {welcomeGet,welcomePost};