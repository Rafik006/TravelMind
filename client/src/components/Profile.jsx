import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post.jsx'

const Profile = ({currentUser}) => {
  console.log("profile",currentUser)
  const[posts,setPosts]=useState([])
  const [user,setUser]=useState(true)
  useEffect(()=>{
    axios.get(`http://localhost:3003/api/posts/allUserPosts/${currentUser.userId}`)
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='profile'>
        <div className='user-info'>
            <img src={currentUser.imageUrl} alt={currentUser.firstName}/>
            <h3>{currentUser.firstName} {currentUser.lastName}</h3> 
            <div className='edit-user'>
            <h4>likes</h4> 
                <h4>update</h4>
                <h4>delete</h4>
            </div>
        </div>
        <div className='profile-posts'>
        {posts.length && posts.map((post,i)=><Post user={user} currentUser={currentUser} key={i} post={post}/>)}
        </div>
        
    </div>
  )
}

export default Profile
