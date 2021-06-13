const jwt = require('jsonwebtoken')
module.exports = (token)=>{
        // return the actual value to token value
        return jwt.sign(token, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
      }