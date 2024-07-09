import React, {useState, useContext} from 'react'
import axios from 'axios'
import ContextObject from './ContextObject'


 //need form, handleSubmit, onChange, api endpoint, how do I show then the .preview in google books, need img, title, author

function SearchByAuthor() {
    console.log('SearchByAuthor page')
    
    const {author, setAuthor} = useContext(ContextObject)
    const [input, setInput] = useState('')


    let BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    async function handleSubmit(evt) {
        evt.preventDefault()

        let response = await axios.get(`${BASE_URL}inauthor:${input}&key=AIzaSyCb0W-9jMh6sviCF2ugUnLp_Sc-D5Z0sWI`)
        console.log('response from author api call', response.data.items)
        console.log('response.data from author api call', response.data)

        setAuthor(response.data.items)
        // let data = response.data.items
        setInput('')  
    }
    


    function handleChange(evt) {
        let value = evt.target.value
        setInput(value)

    }
    
    console.log('what is in author state', author)

    function renderInfo(author) {
        return author.map((item, index) => (
        <>
            
                <div className='card text-start row' style={{backgroundColor: 'rgb(180, 200, 150, .8)'}} key={index}>
                    
                    <div className='card-body col-12'>                        
                            {console.log('item returned', item)}
                            <h4 className='card-title' style={{fontFamily:'garamond', fontWeight:'400'}}>{item.volumeInfo.title}</h4>
                            <h5 className='card-subtitle mb-2' style={{color:'#a84343', fontFamily:'calisto'}}>{item.volumeInfo.authors}</h5>
                            <div className='row'>
                                <div className='col-9'>
                                    <p className='card=text'>{item.volumeInfo.description}</p>
                                </div>
                                <div className='col-3 text-center'>
                                    {item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? (
                                            <img src={item.volumeInfo.imageLinks.thumbnail}>
                                            </img>
                                        ) : (
                                            <img className='img-fluid' src='https://images.pexels.com/photos/1463376/pexels-photo-1463376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
                                        )
                                    }
                                </div>
                            </div>
                                    
                            {/*add href to link to */}
                            
                        </div>
                        
                    <div className='card-footer'>
                        {/* <div className='row'> */}
                           <div className='row'>
                                <div className='col-6'>
                                    <h5 style={{fontSize: '14px'}}>Purchese from:</h5>
                                        <div className='row'>
                                            <div className='col-3'>
                                                {item.saleInfo.buyLink ? (
                                                    <a href={item.saleInfo.buyLink}className='card-link btn' style={{backgroundColor:'#1B1B1F', color:'white', fontSize:'10px'}}>Google</a>
                                        
                                                ) : (
                                                    null
                                                )}
                                            </div>
                                            <div className='col-3'>
                                                <a className='card-link btn'style={{backgroundColor:'#1B1B1F', color:'white', fontSize:'10px'}}>Card Link</a>
                                            </div>

                                        </div>
                                </div>
                                <div className='col-6'>
                                    <h5 style={{fontSize: '14px'}}>e-books:</h5>
                                        <div className='row'>
                                            <div className='col-6'>first</div>
                                            <div className='col-3'>second</div>
                                            
                                        </div>
                                </div>
                            </div>
                                
                            


                        
                        
                        
                    

                        
                    </div>
                </div>
            {/* </div>      */}
        </>
            ));
        
        }

    return (
        
        // </div>
    <>
    <div className='container text-center'>
        <div className='row'>
        {author ? (
            <>
            {renderInfo(author)}
            <p style={{ marginLeft: '20px' }}>"{author.description}"</p>
            </>
        ) : (
            <h1>Search by Author</h1>
        )}
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className='container' style={{ paddingTop: '20px' }}>
                <label htmlFor='author' style={{marginLeft:'10px'}}>Author</label>
                <input type='text' id='author' value={input} onChange={handleChange} name='author' style={{marginLeft:'15px'}}/>
                    <button type='submit' style={{marginLeft:'20px'}}>Search</button>
            </div>
        </form>
    </div>
    </>
    )
}

export default SearchByAuthor

{/* <div className='container' style={{backgroundColor: 'rgb(180, 200, 150, .8)'}} key={index}>
<div className='row test-start'>
    <div className='col-10'>
    <h1 className='text-start' style={{fontSize:'25px', fontFamily:'garamond', fontWeight:'400'}}>{item.volumeInfo.title}</h1>
    <h2 className='text-start' style={{fontSize:'22px', color:'#a84343', fontFamily:'calisto'}}>{item.volumeInfo.authors}</h2>
    <p className='text-start'>{item.volumeInfo.description}</p>
    <hr></hr>
    </div>
</div>
</div> */}

  {/* <div className='col-3'>
                <p>{item.volumeInfo.imageLinks.thumbnail}</p>
                </div> */}

{/**<div className='container text-start'>
        //     <div className='row'>

        // {author ? (
        // <>
        // <h1 style={{marginLeft:'10px'}}>{author.title}</h1>
        // <h2 style={{marginLeft: '20px'}}>{author.authors[0]}</h2>

        //     <p style={{marginLeft: '20px'}}>"{author.description}"</p>
        // </>
        // ) : (
        //     <h1></h1>
    
        // )} */}