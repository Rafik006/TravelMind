// DELETE THIS LINE

const {Users}=require("../database/models/sequelizeSchema")


module.exports={
    createUser:(req,res)=>{
        Users.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))
    },
    getUser:(req,res)=>{
        Users.findOne({where:{email:req.body.email}})
        .then(result=>res.status(200).json(result))
        .catch(err=>res.status(500).json(err))
    },
    deleteUser:(req,res)=>{
        Users.destroy({where:{
            userId:req.params.userId
        }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    },
    updateUser:(req,res)=>{
        Users.update(req.body,{where:{
            userId:req.params.userId
    }})
        .then(result=>res.status(201).json(result))
        .catch(err=> res.status(500).json(err))
    }

}
