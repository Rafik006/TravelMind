import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post.jsx'

const Profile = ({currentUser,handleView}) => {
  console.log("profile",currentUser)
  const[posts,setPosts]=useState([])
  const [user,setUser]=useState(true)
  const[refetch,setRefetch]=useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:3003/api/posts/allUserPosts/${currentUser.userId}`)
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err))
  },[refetch])
  
  const deletePost=(id)=>{
      axios.delete(`http://localhost:3003/api/posts/deletePost/${id}`)
      .then(()=>setRefetch(!refetch))
      .catch(err=>console.log(err))
  }
  const Updatepost=(id,obj)=>{
    axios.put(`http://localhost:3003/api/posts/updatePost/${id}`,obj)
    .then(res=>setRefetch(!refetch))
    .catch(err=>console.log(err))
  }
  const deleteUser=(id)=>{
    axios.delete(`http://localhost:3003/api/posts/deleteUser/${id}`)
    .then(res=>handleView("Home"))
    .catch(err=>console.log(err))
  }
  const updateUser=()=>{
    axios.put(`http://localhost:3003/api/posts/updateUser/${id}`)
    .then(res=>)
    
  }
  return (
    <div className='profile'>
        <div className='user-info'>
            <img src={currentUser.imageUrl} alt={currentUser.firstName}/>
            <h3>{currentUser.firstName} {currentUser.lastName}</h3> 
            <div className='edit-user'>
            <h4>likes</h4> 
                <h4>update</h4>
                <h4 onClick={()=>deleteUser(currentUser.userId)}>delete</h4>
            </div>
        </div>
        <div className='profile-posts'>
        {posts.length && posts.map((post,i)=><Post  Updatepost={Updatepost} deletePost={deletePost} user={user} currentUser={currentUser} key={i} post={post}/>)}
        </div>
        
    </div>
  )
}

export default Profile
