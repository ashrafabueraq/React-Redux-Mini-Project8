import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/userSlice';
import './login.css'

const Login =()=>{
    
    let navigate = useNavigate();
    // const user = useSelector(state=>state);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
          ...userData,
          [e.target.name]: value
        })
    }
    const handleSubmit=(e)=>{



        e.preventDefault()
        const value = e.target.value;
        setUserData({
            ...userData,
        })
        dispatch(login(userData))

        navigate("/main", { replace: true });
    }
    

    return(
        <div className="container" id='login'>
        <form onSubmit={handleSubmit}>
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>

            <div className="form-group">
                <input 
                className="form-control"  
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleChange}
                />
            </div> <br /> <br />

            <div className="form-group">
                <input 
                className="form-control" 
                type="password" 
                name="password" 
                placeholder="Password"  
                onChange={handleChange}
                /> <br /> 

            </div>
            <div className="form-group" id='butn'>
                <button className="btn btn-primary btn-block" type="submit" id='log'>Log In</button>
            </div>
            
        </form>
    </div>
    )
}

export default Login;