const {Posts,Users}=require("../database/models/sequelizeSchema")



module.exports={
        getUserPosts:(req,res)=>{
            Posts.findAll({where:{
                users_usersId:req.params.userId
            },include:{model:Users,as:"user"}})
            .then(result=>res.status(200).json(result))
            .catch(err=>res.status(500).json(err))
        },
        getAllPost:(req,res)=>{
            Posts.findAll({include:{model:Users,as:"user"}})
            .then(result=>res.status(200).json(result))
            .catch(err=>res.status(500).json(err))
        },
       
        createPost:(req,res)=>{
            const {content,likes,imageUrl}=req.body
            Posts.create({content,likes,imageUrl,users_usersId:req.params.userId})
            .then(result=>res.status(201).json(result))
            .catch(err=>res.status(500).json(err))
        },
        updatePost:(req,res)=>{
            Posts.update(req.body,{where:{
                postsId:req.params.postId
            }})
            .then(result=>res.status(201).json(result))
            .catch(err=>res.status(500).json(err))
        },
        deletePost:(req,res)=>{
            Posts.destroy({where:{
                postsId:req.params.postId
            }})
            .then(result=>res.status(201).json(result))
            .catch(err=>res.status(500).json(err))
        }
}