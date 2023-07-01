import React, { useState } from 'react'
import SignUp from "./Login/SignUp.jsx"
import SignIn from "./Login/SignIn.jsx"

const Home = ({addUser,getUser}) => {
  const [view,setView]=useState("")
  const handleView=(option)=>{
    setView(option)
  }
const handleLogin=()=>{
  if(view==="signup"){
    return <SignUp handleView={handleView} addUser={addUser}/>
  }else if(view==="signin"){
    return <SignIn getUser={getUser}/>
  }
}
  return (
    <div className='main-home'>
        <img src="https://img.haikudeck.com/mg/39wXNUUrt5_1427814555788.jpg" alt='home'/> 
        <p className='signin' onClick={()=>handleView("signin")}>Sign In </p> <p className='signUp'  onClick={()=>handleView("signup")}>Sign Up</p>

        {handleLogin()}
        

    // </div>
  )
}

export default Home
