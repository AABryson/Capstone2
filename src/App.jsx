//Working on creating a link for each book returned so that it will take user to a page with only the info about that book
//create link for user to read online when book is open source
//ADD QUOTES FROM FAMOUS AUTHORS AND POSSIBLY AND SLIDING SCREEN WITH IMAGES

import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import SearchByAuthor from './SearchByAuthor.jsx'
import SearchByTitle from './SearchByTitle'
import SearchBySubject from './SearchBySubject'
import Signup from './credentials/Signup'
import HomePage from './HomePage.jsx'
import NavBar from './NavBar.jsx'
import ContextObject from './ContextObject'
import './App.css'


function App() {

  const [signupData, setSignupData] = useState({username:'', password:'', email:''})

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [user, setUser] = useState('')
  
  let print = console.log('state of title in app.jsx', title)


  return (
    <>
    <div className='imgFluid'style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D')`,
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
    

      
    
    <ContextObject.Provider value={{author, setAuthor, title, setTitle, subject, setSubject, user, setUser}} >
    <NavBar />
    <Routes>
      
      <Route path='/' element={<HomePage />}/>
      <Route path='/author' element={<SearchByAuthor />}/>
      <Route path='/title' element={<SearchByTitle />} />
      <Route path='/subject' element={<SearchBySubject />} />
      <Route path='/signup' element={<Signup />}  />

    </Routes>
    </ContextObject.Provider >
  
  </div>
  </>
  
  )
  
}

export default App
