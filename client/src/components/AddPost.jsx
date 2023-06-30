import React, { useState } from 'react'

const AddPost = ({addPost}) => {
    const [post,setPost]=useState("")
  return (
  
        <div className='post-input'>
                <img src='https://yt3.googleusercontent.com/afu13e7K1pNwaLRcvgpONirk2D3YqA4guP26hVweGWpWmA7OU0sEsY3Dk_mYpKLndFPnvNtb=s900-c-k-c0x00ffffff-no-rj' alt="el3ou9"/>
                <input className='about-trip'  placeholder=" write about your trip here ..." value={post} onChange={(e)=>setPost(e.target.value)} />
                <input className='image-input' type='file' />
                <button className='addPost' onClick={()=>{
                    addPost(1,{"content":post,imageUrl:"https://www.thetrainline.com/cmsmedia/cms/10023/austria_vienna_hero_1x.jpg"})
                    setPost("")
                }}>Add Post</button>
        </div>


  )
}

export default AddPost
