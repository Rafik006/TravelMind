import React from 'react'
import Post from './Post.jsx'
import AddPost from './AddPost.jsx'

const AllPosts = ({posts,addPost,currentUser,addLike}) => {

  return (
    <div>
      <AddPost currentUser={currentUser} addPost={addPost} />
        {posts.map((post,i)=><Post addLike={addLike} currentUser={currentUser} key={i} post={post}/>)}
    </div>
  )
}

export default AllPosts
