import axios from 'axios'
import React, { useState } from 'react'

const AddPost = ({addPost,currentUser}) => {
    const [post,setPost]=useState("")
    const  [imageUrl,setImageUrl]=useState("")
    const[file,setFile]=useState("")
    console.log(imageUrl)
    const uploadImage=async()=>{
      const form=new FormData()
      form.append("file",file)
      form.append("upload_preset","travelMind")
      await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
      .then(res=>setImageUrl(res.data.secure_url))
      .catch(err=>console.log(err))
    }
  return (
  
        <div className='post-input'>
                <img src={currentUser.imageUrl} alt="el3ou9"/>
                <input className='about-trip'  placeholder=" write about your trip here ..." value={post} onChange={(e)=>setPost(e.target.value)} />
                <input className='image-input' type='file' onChange={(e)=>setFile(e.target.files[0])} />
                <button className='addPost' onClick={()=>{
                  uploadImage()
                }} >upload Image</button>
            {imageUrl&&  <button className='addPost' onClick={()=>{
                    
                    addPost(currentUser.userId,{"content":post,imageUrl:imageUrl})
                    setPost("")
                }}>Add Post</button>}
        </div>


  )
}

export default AddPost
