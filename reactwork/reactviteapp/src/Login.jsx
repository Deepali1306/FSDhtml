import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom'
function Login({logindata}) {
const[email,setEmail]=useState();
const[password,setPassword]=useState();

    const navigate=useNavigate();
  function verification(){
  if(logindata.email==email){
    alert("User is valid");
    navigate('/dashboard');

  }
  else{
    alert("User is invalid");
  }
  
}

  return (
    <div>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={verification} class="btn btn-primary">Login</button>
</form>

    </div>
  )
}

export default Login