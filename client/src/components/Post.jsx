import React, { useState } from 'react'
import UpdatePost from './UpdatePost.jsx'

const Post = ({post,currentUser,user,deletePost,Updatepost,addLike,handleReftch}) => {
  const [editPost,setEdit]=useState({})
  const [like,setLike]=useState(true)
  const [classNamee,setClassName]=useState("")
  const handleEdit=(obj)=>{
    setEdit(obj)
  }
  if(editPost.postsId){
    return <UpdatePost handleEdit={handleEdit} Updatepost={Updatepost} Post={editPost}/>
  }
  console.log(editPost)
  return (
    <div className='post'>
            <div className='userInfo'>
              <div className='edit'>
                <img src={post.user.imageUrl} alt={post.user.firstName}/>
                <span>{post.user.firstName+" "+post.user.lastName}</span>
                </div>
{ user&&                <div className='edit' >
                <p onClick={()=>handleEdit(post)}>update</p>
                <p onClick={()=>deletePost(post.postsId)}>delete</p>
                </div>}
            </div>
            <div className='post-container'>
                <p className='post-status'>{post.content}</p>
                <img className='post_image' src={post.imageUrl}/>
            </div>
            <div className='interaction-container'>
                <p className={classNamee} onClick={()=>{
                  {like&&addLike(post.postsId)}
                  setLike(false)
                  {like&&handleReftch()}
                  setClassName("liked")
                  }}>{post.likes} like</p> <p>comment</p>
            </div>
    </div>
  )
}

export default Post
