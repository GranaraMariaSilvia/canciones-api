



const { validationResult } = require('express-validator'); //TODO:

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw('se registro un error')
        return next()
    } catch (error) {
        res.status(403)
        res.send({ errors: error.array() })
    }
}

module.exports = { validateResult }
