const authPost = (req, res = response) => {
    console.log('authpost')
    
    res.json({
        msg: 'endpoint post auth',
        
    });
}

module.exports = {authPost};