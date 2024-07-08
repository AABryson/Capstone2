import React from 'react'
import { NavLink } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

 


    return (
        // <div>
        //     <NavLink to='/author' style={linkStyle}>Author</NavLink>
            
        //     <NavLink to='/login' style={linkStyle}>Login</NavLink>
        //     <NavLink to='/signup' style={linkStyle}>Signup</NavLink>
        // </div>
        // <div className='container-fluid' style={{width:'100vw'}}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="d-flex align-items-center">

                <span className="navbar-brand mb-0 h1" style={{marginLeft:'10px'}}>Glorious Books</span>
                {/* <vr></vr> */}
                <ul className="navbar-nav">
                    <li className='nav-text'>
                    <NavLink to='/author' className='nav-link' style={{color:'#ADB5AB', marginRight:'10px'}}>Author</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <NavLink to='/login' style={{color:'#ADB5AB', marginRight:'15px'}}>Login</NavLink>                    
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <NavLink to='/signup' style={{color:'#ADB5AB', marginRight:'10px'}}>Signup</NavLink>                 
                    </li>
                </ul>
            </div>
            </nav>
        
        
        
    )
}
        {/* // <nav className="navbar navbar-expand-lg navbar-dark bg-light">author nav
        //     <div className='container-fluid'>
        //         {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        {/* //             <ul className="navbar-nav">
        //                 <li className="nav-item"> */}
        //                         {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
        //                         {/* <NavLink to='/author' style={{margin:'10px'}}>Author</NavLink> */}
        {/* //                         <NavLink className='nav-link' style={{color:'white'}} to='/author'>Author</NavLink>
        //                 </li> */}
        //                 {/* <li class="nav-item">
        //                 <a class="nav-link" href="#">Features</a>
        //                 </li>
        //                 <li class="nav-item">
        //                 <a class="nav-link" href="#">Pricing</a>
        //                     </li> */}
        // {/* //                 </ul> */} */}
                    {/* </div> */}
            {/* // </div> */}
            
            // {/* <div style={{ top: '10px' }}>
            // <NavLink to='/author' style={{margin:'10px'}}>Author</NavLink>
            //     </div>
            // </div> */}
            {/* // </nav> */}
//     )
// }

export default NavBar