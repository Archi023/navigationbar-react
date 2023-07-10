import React, { useState } from 'react';


const About = () => {
 
  const [count,setCount]=useState(0);

  const submitHandler =()=>{
    setCount(count + 1);
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={submitHandler}>click</button>
    </>
  )
};
export default About;
