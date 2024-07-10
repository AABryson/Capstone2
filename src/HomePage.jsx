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
        <div className='container-fluid'>
            <div className='row' style={{ padding: '30px' }}>
            
                <h1 className='display-1' style={{borderColor:'grey', borderWidth:'5px', borderStyle:'double', fontWeight:'300', fontFamily: 'garamond', fontSize:'80px', color:'white', backgroundColor:'black', letterSpacing:'7px'}}>Glorious Books</h1>
            </div>
            <div className='row'>
                <h2 style={{paddingBottom: '100px', fontFamily:'garamond', fontSize:'35px', }}>Search for books by...</h2>
            </div>
            <div className='row pb-5'>
                <div className='col-3'>

                </div>
            
                <div className='col-3'>
                    <h3 className='start-end' style={{width:'200px', height:'60px', backgroundColor:'#434341'}}><a href='/author' style={{color:'#FFFFF3', paddingTop: '10px', fontFamily:'garamond', display:'flex', alignItems:'center', justifyContent:'center'}}>Author</a></h3>
                  
                </div>
                <div className='col-3'>
                    <img src='https://artsfuse.org/wp-content/uploads/2020/01/flannery_p-600x431-2.jpg' style={{width:'120pxj', height:'150px'}}></img>
                </div>

            </div>
            <div className='row pb-5'>
                <div className='col-5'>

                </div>
            
                <div className='col-1'>
                    <h3 className='align-text-bottom'><a href='/subject' style={{color:'#a84343'}}>Subject</a></h3>
                  
                </div>
                <div className='col-3'>
                    <img src='https://www.experimentaltraveler.com/wp-content/uploads/Socrates-11.png' className='image-fluid' style={{width:'150pxj', height:'170px'}}></img>
                </div>

            </div>
            <div className='row pb-5'>
                <div className='col-5'>

                </div>
            
                <div className='col-1'>
                    <h3 className='align-text-bottom'><a href='/title' style={{color:'#a84343'}}>Title</a></h3>
                  
                </div>
                <div className='col-3'>
                    <img src='https://m.media-amazon.com/images/I/51KnUfnbdQL._SY466_.jpg' className='image-fluid' style={{width:'150pxj', height:'170px'}}></img>
                </div>

            </div>

        </div>
    )
}

export default HomePage

