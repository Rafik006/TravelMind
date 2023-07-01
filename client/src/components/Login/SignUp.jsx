import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({addUser,handleView}) => {
  const  [imageUrl,setImageUrl]=useState("")
  const[file,setFile]=useState("")

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    
  });

  const uploadImagee=async()=>{
    const form=new FormData()
    form.append("file",file)
    form.append("upload_preset","travelMind")
    await axios.post("https://api.cloudinary.com/v1_1/do25iiz1j/upload",form)
    .then(res=>setImageUrl(res.data.secure_url))
    .catch(err=>console.log(err))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user={
       firstName:data.firstname,
       lastName:data.lastname,
       email:data.email,
       password:data.password,
       imageUrl:imageUrl
    }
    console.log(user)
    // console.log(user)
    addUser(user)
    handleView("signin")
  };

  return (

      <div className="signup-form-container">
        <h2 className="signup-header">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           
            <input 
            className="form-input"
            name="firstname" 
            value={data.firstname} 
            onChange={handleChange}
            placeholder='First Name'/>
          </div>
          <div className="form-group">
            
            <input className="form-input" 
            name="lastname" 
            value={data.lastname}
             onChange={handleChange} 
             placeholder='First Name' />
          </div>
          <div className="form-group">
       
            <input className="form-input"
             name="email" 
             value={data.email} 
             onChange={handleChange} 
             placeholder='Email' />
          </div>
          <div className="form-group">
               <input className="form-input" 
               type="password" 
               name="password" 
               value={data.password} 
               onChange={(e)=>{
               
                handleChange(e)}} 
               placeholder='Password' />
          </div>

          <input className='image-input signupInput' type='file' onChange={(e)=>{
            setFile(e.target.files[0])
            
            }} />
            <button  type="button"  className='addPost' onClick={()=>{
                  uploadImagee()
                }} >upload Image</button>
          <div className="form-group">
            {imageUrl&&<input type="submit" value="Sign Up" className="form-button" />}
          </div>
        </form>
      </div>

  );
};

export default SignUp; 
