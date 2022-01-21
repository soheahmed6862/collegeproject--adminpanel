import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';


const Login = () => {


    const admin=useSelector(state =>console.log(state.products.currentuser))
    const dispatch =useDispatch()
    const [username,setusernames] =useState(" ")
    const [password,setpassword] =useState(" ")
    const handlechnage=(e)=>{
        e.preventDefault();

        console.log("sdfsaf")
  login(dispatch,{username,password})
  if(admin){
  
    

  }


    }


    return (
        <div  style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height:"100vh", flexDirection:"column"}}>
            <input style={{    padding:" 10px", margin:"10px"}} type="text" placeholder="username" name="username" onChange={(e)=>setusernames(e.target.value)} />
            <input type="password" placeholder="password" name="password" onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handlechnage}>login in user</button>
        </div>
    );
};

export default Login;