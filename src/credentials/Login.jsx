import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import ContextObject from '../ContextObject'
import axios from 'axios'

function Login () {
    const [loginData, setLoginData] = useState({username:'', password:''})
    // const {setToken} = useContext(ContextObject)
    const {setUser} = useContext(ContextObject)
    let navigate = useNavigate()

    let baseURL = 'http://localhost:3001'

    async function sendCredentials(user) {
        let response = await axios.post(`${baseURL}/users/login`, user)
        console.log('response from axios request to request to login at users/login', response)
        return response.data
    }  

    
    async function handleSubmit(e) {
        e.preventDefault()
        setUser(loginData)
        setLoginData({username: '', password: ''})
        let response = await sendCredentials(loginData)
        navigate('/')
        return {success: true}
       
    }

    function handleChange(e) {
        const {name, value}=e.target
        setLoginData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }
    
    return (
        <>
        <div className='container text-start'>
            <h1>Login page</h1>
                <form onSubmit={handleSubmit}>
                    <div className='row my-3'>
                        <div className='col-1'>
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div className='col-10'>
                            <input type='text' id='username' name='username' value={loginData.username} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-1'>

                            <label htmlFor='password'>Password</label>

                        </div>

                        <div className='col-10' >
                            <input type='text' id='password' name='password' value={loginData.password} onChange={handleChange}/>
                        </div>
                    </div>
                            <button type='submit'>Submit</button>
        
                </form>
        </div>
        </>

    )
}

export default Login