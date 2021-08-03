import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
const Login = () => {
    const handleClick = () => {
        auth.signInWithPopup(provider).catch(error => console.log(error.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img src="/images/pngegg.png" alt="" />
                <h1>Message</h1>
            </div>
            <Button className='login_button' onClick={handleClick}>
                Sign In
            </Button>
        </div>
    )
}
export default Login
