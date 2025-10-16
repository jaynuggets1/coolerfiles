
const path=require("path")
const Post = require("../models/Post"
)

const showHomee = (req,res)=>{
    res.render("index")
}


const createPost =(req,res)=>{
    res.render("create-post")
}

const storePost = async(req,res)=>{
    


console.log(req)
    try{
        const image = req.files.image
        await image.moveFile(image.tempFilePatch,path.resolve(__dirname, '..','public/posts', image.name))
            await Post.create({

                ...req.body,
                image:`/posts/${image.name}`
            })
    
            res.redirect("/")
                } catch(err){
        console.log(err)
    }
}

module.exports = {
    showHomee, createPost, storePost
}