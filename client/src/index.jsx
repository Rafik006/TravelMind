import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AllPosts from './components/AllPosts.jsx'
import Profile from './components/Profile.jsx'
import axios from 'axios'
import Home from './components/Home.jsx'


const App = () => {
  const [view,setView]=useState("Home")
  const [posts,setPosts]=useState([])
  const [currentUser,setPost]=useState({})

  useEffect(()=>{
    axios.get("http://localhost:3000/api/posts/allposts")
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err))
  },[])
  const addPost=(userId,data)=>{
    axios.post(`http://localhost:3000/api/posts/createPost/${userId}`,data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  const handleView=(option)=>{
    setView(option)
  }
  const handleViews=()=>{
    if(view==="AllPosts"){
      return <AllPosts addPost={addPost} posts={posts}/>
    }else if(view==="profile"){
      return <Profile/>
    }else if(view==="Home"){
      return <Home/>
    }
  }
  return (
    <div>
        <ul className="header">
            <li className="logo" onClick={()=>handleView("Home")}>
              Travel Mind
            </li>
            {currentUser.userId&&<li className="" onClick={()=>handleView('AllPosts')}>
              All Posts
              
            </li>}
            {currentUser.userId&&<li className="" onClick={()=>handleView('profile')}>
              Your Profil
              
            </li>}

      </ul>
      <div className='body'>
              {handleViews()}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
