import React from 'react'

const Post = ({post,currentUser}) => {
  return (
    <div className='post'>
            <div className='userInfo'>
                <img src={post.user.imageUrl} alt={post.user.firstName}/>
                <span>{post.user.firstName+" "+post.user.lastName}</span>
            </div>
            <div className='post-container'>
                <p className='post-status'>{post.content}</p>
                <img className='post_image' src={post.imageUrl}/>
            </div>
            <div className='interaction-container'>
                <p>{post.likes} like</p> <p>comment</p>
            </div>
    </div>
  )
}

export default Post
