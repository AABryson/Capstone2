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
            <div className='container' style={{backgroundColor: 'rgb(180, 200, 150, .8)'}} key={index}>
                <div className='row test-start'>
                    <div className='col-10'>
                    <h1 className='text-start' style={{fontSize:'25px', fontFamily:'garamond', fontWeight:'400'}}>{item.volumeInfo.title}</h1>
                    <h2 className='text-start' style={{fontSize:'22px', color:'#a84343', fontFamily:'calisto'}}>{item.volumeInfo.authors}</h2>
                    <p className='text-start'>{item.volumeInfo.description}</p>
                    <hr></hr>
                    </div>
                </div>
            </div>
            ));
        }

    return (
        // <div className='container text-start'>
        //     <div className='row'>

        // {author ? (
        // <>
        // <h1 style={{marginLeft:'10px'}}>{author.title}</h1>
        // <h2 style={{marginLeft: '20px'}}>{author.authors[0]}</h2>

        //     <p style={{marginLeft: '20px'}}>"{author.description}"</p>
        // </>
        // ) : (
        //     <h1></h1>
    
        // )}
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