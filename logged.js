







const express = require("express")
const ej = express()
const engine = require('express-edge') //temlate engine
const expressFileUpload = require("express-fileupload")




const db =require("./db")


ej.use(express.static("public"))
ej.use(express.json())

ej.use(express.urlencoded({
    extended:true
}))

const {showHomee, createPost, storePost} = require('./controllers/PostController.js')

ej.use(expressFileUpload())

ej.use(engine)
ej.set("views", `${__dirname}/views`) 



ej.get('/', showHomee)
ej.get("/posts/new", createPost)
ej.post("/posts/store", storePost)


ej.listen(1007)