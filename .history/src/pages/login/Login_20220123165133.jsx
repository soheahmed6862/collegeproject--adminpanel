import React, { useState } from 'react';
import { useDispatch, useSelector ,} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';


const Login = () => {

 const navigate=useNavigate(true);
    const admin=true;


    const dispatch =useDispatch()
    const [username,setusernames] =useState(" ")
    const [password,setpassword] =useState(" ")
    const handlechnage=(e)=>{
        e.preventDefault();


  login(dispatch,{username,password})


 
//    if(admin){


//    }

navigate("/")
 




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