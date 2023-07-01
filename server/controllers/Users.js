// DELETE THIS LINE

const {Users}=require("../database/models/sequelizeSchema")


module.exports={
    createUser:(req,res)=>{
        Users.create(req.body)
        .then(result=>res.status(204).json(result))
        .catch(err=>res.status(500).json(err))
    },
    getUser:(req,res)=>{
        console.log(req.params.email)
        console.log(req.params.password)
        console.log("hi")
        Users.findOne({where:{email:req.params.email,password:req.params.password}})
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
