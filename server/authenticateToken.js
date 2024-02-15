const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        // console.log("cookie token", token);
        if (!token) {
            req.id = '';
            return res.status(401).send('No token provided');
        }
        
        const verifyUser = jwt.verify(token, "jsonwebtokenisgeneratingforuser");
        // console.log('User verified:', verifyUser);
        if(verifyUser){
            req.isUser = true;
            req.id = verifyUser._id;
        }
        next();
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(401).send('Authentication failed');
    }
}

module.exports = authenticateToken;
