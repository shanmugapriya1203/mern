import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    // const[text,setText]=useState("")
    // const handleChange=(e)=>{
    //     setText(e.target.value)
    // }
    const[name,setName]=useState("")
    const [email,setEmail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()//Prevents page reload
        alert(`Form Submitted ${name} and ${email}`)
    }
  return (
    <div>
      Hi This is Home
      <Link to='/about'>
      <button>About</button>
      </Link>
      {/* <div> */}
        {/* <input type='text' onChange={handleChange} placeholder='Type here...'/> */}

        {/* <p>You typed: {text}</p> */}
      {/* </div> */}
      <form  onSubmit={handleSubmit}>
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}placeholder="Enter name"/>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Home
