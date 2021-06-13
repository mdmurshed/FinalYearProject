const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
        console.log("auth")
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const decode = jwt.verify(token, 'secret')
        req.userData = decode
        next();
    } catch (err) {
        res.status(200).send('Error Authentication')
    }
}
module.exports = auth