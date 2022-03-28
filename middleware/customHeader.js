const customHeader = (req,res,next) => {
    try {
        const apiKey = req.headers.api_key

        if(apiKey === 'leifer-01'){
    console.log(req.headers)
            next()
        }else{
            res.status(403)
            res.send({ error :'API_KEY NO ES CORRECTO'})
        }

    } catch (error) {
        res.status(403)
        res.send({ error :'Algo ocurrio en el Custom Header'})
    }
}


module.exports = customHeader