const router = require('express').Router();
const {getAllPost,createPost, updatePost,deletePost,getUserPosts,updateLikes} = require("../controllers/Posts");
const {createUser,getUser,updateUser,deleteUser}=require("../controllers/Users")


// user Routes
router.get("/getUser/:email/:password",getUser)
router.post('/createUser',createUser)
router.put("/updateUser/:userId",updateUser)
router.delete("/deleteUser/:userId",deleteUser)



// posts routes 
router.post("/createPost/:userId",createPost)
router.get("/allposts",getAllPost );
router.get("/allUserPosts/:userId",getUserPosts)
router.put("/updatePost/:postId",updatePost)
router.delete("/deletePost/:postId",deletePost)
router.put("/updateLikes/:postId",updateLikes)






module.exports = router;
