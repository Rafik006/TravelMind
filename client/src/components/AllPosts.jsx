import React from 'react'
import Post from './Post.jsx'
import AddPost from './AddPost.jsx'

const AllPosts = ({posts,addPost}) => {
  return (
    <div>
      <AddPost addPost={addPost} />
        {posts.map((post,i)=><Post key={i} post={post}/>)}
    </div>
  )
}

export default AllPosts
