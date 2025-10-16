
const mongoose = require("mongoose")

const db = (async ()=>{

try{
await mongoose.connect("mongodb://0.0.0.0:27017/nodeblog", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
console.log("database connected")

}catch(err){
console.log(err)
}
})()

module.exports = db