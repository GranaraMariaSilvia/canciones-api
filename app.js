require("dotenv").config()
const express = require ("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const loggerStream = require('./utils/handleLogger')
const app = express();
const morganBody = require('morgan-body');



app.use(cors());
app.use(express.json());
app.use(express.static("storage"));








morganBody(app, {
    noColors:true,
   stream: loggerStream, 
    skip: function (req,res){
      return res.statusCode < 400
    }
})


const port = process.env.PORT || 3001;

app.use("/api",require("./routes"))

app.listen(port, () =>{
    console.log(`Tu app esta lista en el puerto http://localhost:${port}`)
});

dbConnect();