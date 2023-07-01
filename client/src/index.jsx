import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AllPosts from './components/AllPosts.jsx'
import Profile from './components/Profile.jsx'
import axios from 'axios'
import Home from './components/Home.jsx'


const App = () => {
  const [view,setView]=useState("Home")
  const [posts,setPosts]=useState([])
  const [currentUser,setCurrentUser]=useState({})
  const [refetch,setRefetch]=useState(false)
  //handleReftch
  const handleReftch=()=>{
    setRefetch(!refetch)
  }

  useEffect(()=>{
    axios.get("http://localhost:3003/api/posts/allposts")
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err))
  },[refetch])
  //create users
  const addUser=(obj)=>{
      axios.post(`http://localhost:3003/api/posts/createUser`,obj)
      .then(res=>console.log('index',res))
      .catch(err=>console.log('index',err))
  }
  //get user 
  const getUser=(obj)=>{
    console.log('home',obj)
      axios.get(`http://localhost:3003/api/posts/getUser/${obj.email}/${obj.password}`)
      .then(res=>{
        if(res.data){
          console.log(res.data);
          setCurrentUser(res.data)
          setView('AllPosts')
          
        }else{
          alert("email or password incorrect")
        }
      })
      
      .catch(err=>console.log(err))
  }
  const addPost=(userId,data)=>{
    axios.post(`http://localhost:3003/api/posts/createPost/${userId}`,data)
    .then((res)=>{
      handleReftch()
    })
    .catch(err=>console.log(err))
  }
  const handleView=(option)=>{
    setView(option)
  }
  const handleViews=()=>{
    if(view==="AllPosts"){
      return <AllPosts  currentUser={currentUser} addPost={addPost} posts={posts}/>
    }else if(view==="profile"){
      return <Profile currentUser={currentUser}/>
    }else if(view==="Home"){
      return <Home getUser={getUser} addUser={addUser}/>
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
