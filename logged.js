



const express = require("express")
const engine = require('express-edge')
const ej = express()







ej.use(express.static("public"))
ej.use(engine)
ej.set("views", `${__dirname}/views`)



ej.get('/', (req, res)=>{
    return res.status(200).json({message:"hy world"});
})

ej.listen(1007)