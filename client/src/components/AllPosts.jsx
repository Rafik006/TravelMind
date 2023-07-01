import React from 'react'
import Post from './Post.jsx'
import AddPost from './AddPost.jsx'

const AllPosts = ({posts,addPost,currentUser}) => {

  return (
    <div>
      <AddPost currentUser={currentUser} addPost={addPost} />
        {posts.map((post,i)=><Post currentUser={currentUser} key={i} post={post}/>)}
    </div>
  )
}

export default AllPosts
