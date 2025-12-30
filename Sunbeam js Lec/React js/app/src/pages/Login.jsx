import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { loginUser } from '../Services/userServices';
import axios from 'axios';

import { useNavigate } from 'react-router';
 function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    async function  signIn(e) {
        e.preventDefault()
        if(email == '') {
            toast.error("Email is empty")
        }
        else if(password == '') {
            toast.error("Password is empty")
        }
        else {
            toast.success("Loged In successfuly")
        }
        const data = await loginUser(email, password)
        
        if(data.status == 'SUCCESS') {
            console.log(data);
            toast.success("Success")
        }
    }
  return (
    <>
        <Navbar/>
        <div className='container mt-5'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e => setEmail(e.target.value))} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={signIn}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login