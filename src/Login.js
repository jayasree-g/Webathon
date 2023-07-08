import React, {useState} from 'react'
import {Link} from 'react-router-dom';
function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    return (
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src="data:image/png;base64,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" width="140px" height="140px"/>
                            </div>
                        </div>
                        <div>
                            <h1 className='LHeader'>Login</h1>
                            <div>
                                
                                <input type="email" placeholder='Enter Email-id' className='fill' onChange={(event) => setEmaillog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                
                                <input type="password" placeholder='Enter Password' className='fill' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="button">Login</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <Link className='link' to='/registration'>
                                    <li>Register Now</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login