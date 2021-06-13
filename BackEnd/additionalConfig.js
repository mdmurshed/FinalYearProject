module.exports = {
    postDisable: (req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.header('Access-Contorl-Allow-Headers', 'Origin,X-Requested-With, Content-Type,Accept,Authorization')
        if (req.method === 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET')
            return res.status(200).json({})
        }
        next();
    },
    createMidError: (req, res, next) => {
        const error = new Error('M.D Not Found');
        error.status = 404;
        next(error);
    },
    MidErrorShow: (error, req, res, next) => {
        res.status(error.status || 500)
        res.json({
            error: {
                message: error.message
            }
        })
    }

}