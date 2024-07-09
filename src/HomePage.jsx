import React from 'react'


function HomePage() {



    return (
        // <div className='container'
        //     style={{
        //         backgroundImage: `url('https://images.unsplash.com/photo-1667312939934-60fc3bfa4ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3N8ZW58MHx8MHx8fDA%3D')`,
        //         height: '100vh',
        //         width: '100vh',
        //         backgroundSize: 'cover',
        //         backgroundRepeat: 'no-repeat',
        //         backgroundPosition: 'center center'
        //     }}
        // >
        <div className='container'>
            <div className='row' style={{ padding: '30px' }}>
            
                <h1 className='display-1' style={{borderColor:'grey', borderWidth:'5px', borderStyle:'double', fontWeight:'300', fontFamily: 'garamond', fontSize:'80px', color:'white', backgroundColor:'black'}}>Glorious Books</h1>
            </div>
            <div className='row'>
                <h2 style={{paddingBottom: '100px'}}>Search for books by...</h2>
            </div>
            <div className='row'>
                <div className='col-5'>

                </div>
            
                <div className='col-1'>
                    <h3 className='start-end'><a href='/author' style={{color:'#a84343'}}>Author</a></h3>
                  
                </div>
                <div className='col-3'>
                    <img src='https://artsfuse.org/wp-content/uploads/2020/01/flannery_p-600x431-2.jpg' style={{width:'120pxj', height:'150px'}}></img>
                </div>

            </div>
        </div>
    )
}

export default HomePage