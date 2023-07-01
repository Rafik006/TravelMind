import React, { useState } from 'react';


const SignupComponent = ({getUser}) => {
  const [data,setData ] = useState({
    email: '',
    password: ''
  
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    getUser({"email":data.email,"password":data.password})

  };

  return (

      <div className="signup-form-container">
        <h2 className="signup-header">Sign In </h2>
        <form onSubmit={handleSubmit}>
         
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
               onChange={handleChange} 
               placeholder='Password' />
          </div>


          <div className="form-group">
            <input type="submit" value="Sign Up" className="form-button" />
          </div>
        </form>
      </div>

  );
};

export default SignupComponent; 
