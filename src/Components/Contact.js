import React, { useState } from 'react'

const Contact = () => {
  const[name,setName]=useState();
  const[fname,setFname]=useState();

  const inputEvent =(e)=>{
        setName(e.target.value);
  }
  const submithandle =(e)=>{
      e.preventDefault();
      setFname(name);
}
  
  return (
    <>
    <h1>nj{fname}</h1>
    <form onSubmit={submithandle}> 
      
     <label>name</label>
      <input type='text' placeholder='Enter name' onChange={inputEvent} value={name}/><br/><br/>
      
      <label>password</label>
      <input type='password' placeholder='Enter password'/><br/><br/>
      <button>submit</button>
      
    </form>
  
    </>
  )
};
export default Contact;
