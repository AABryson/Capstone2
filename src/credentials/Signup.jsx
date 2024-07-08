import React, {useState, useContext} from 'react'
// import JoblyApi from './api'
import ContextObject from '../ContextObject'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function Signup () {
//register new user; username, password, email
    //state for info entered into input
    const [signupData, setSignupData] = useState({username:'', password:'', email:''})
    //state for user credentials/information
    const{user, setUser} = useContext(ContextObject)

    let baseURL = 'http://localhost:3001'
    //post request to api; includes user info
    async function sendInfo(user) {
        let response = await axios.post(`${baseURL}/signup`, user)
            console.log('response from axios request to /signup', response)
        return response.data
    }

    let navigate = useNavigate()
    // const {setToken} = useContext(ContextObject)
    function handleChange (e) {
        const {name, value} = e.target
        //#####################################({
        setSignupData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit (e) {
        e.preventDefault()
        //execute function that sends post request to api
        // let token = await JoblyApi.signUp(signupData)
        // setToken(token)
        setUser(signupData)
        //clear inputs
        setSignupData({username:'', password:'', email:''})
        
        let response = await sendInfo(signupData)
        console.log('data possibly passed to endpoint', response)

        navigate('/')
        console.log('signupData added to user state', signupData)
    }

    return (
        <>
        <div className='container text-start'>
            <h1>Signup page</h1>
                <form onSubmit={handleSubmit}>
                    <div className='row my-3'>
                        <div className='col-1'>
                            <label htmlFor='username'>Username</label>
                        </div>
                        <div className='col-10'>
                            <input type='text' id='username' name='username' value={signupData.username} onChange={handleChange}/>
                        </div> 
                    </div>
                    <div className='row my-3'>
                        <div className='col-1'>
                                <label htmlFor='password'>Password</label>
                        </div>
                        <div className='col-10'>
                                <input type='text' id='password' name='password' value={signupData.password} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-1'>
                                <label htmlFor='email'>Email</label>
                        </div>
                        <div className='col-10' >
                            <input type='text' id='email' name='email' value={signupData.email} onChange={handleChange}/>
                        </div>
                    </div>
                        <button type='submit' className='btn btn-light'>Submit</button>
                </form>
        </div>
        </>
    )
}
export default Signup

{/* <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' name='firstName' value={signupData.firstName} onChange={handleChange}/>
                        <br></br>

                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' value={signupData.lastName} onChange={handleChange}/>
                        <br></br> */}

                        // return token
        //example of token returned:
        {/**eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthY3kiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzE4ODQyODA0fQ.H6fZ_m5uSz_HG9FADChEEwDY61Yvz1 */}