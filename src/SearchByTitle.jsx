import React, {useState, useContext} from 'react'
import axios from 'axios'
// import { useParams, Link } from 'react-router-dom'
import ContextObject from './ContextObject'



function SearchByTitle() {
    console.log('SearchByTitle page')
    const {title, setTitle} = useContext(ContextObject)
    const [queryString, setQueryString] = useState('')
    const [input, setInput] = useState('')


    // const {title} = useParams()
    

    let BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    async function handleSubmit(evt) {
        evt.preventDefault()
        const formattedQueryString = input.split(' ').join('+');
        setQueryString(formattedQueryString);
        let response = await axios.get(`${BASE_URL}intitle:${queryString}&key=AIzaSyCb0W-9jMh6sviCF2ugUnLp_Sc-D5Z0sWI`)
        console.log('items from title api call', response.data.items)
        console.log('response.data from title api call', response.data)

        
            
        
        setTitle(response.data.items)
        
        setInput('')


    
        // return response.data.items
        
    }
    


    function handleChange(evt) {
        let value = evt.target.value
        setInput(value)
    
        
    }
    
    console.log('what is in title state', title)

    // function getInfo(title) {
    //     for(let item in title) {
    //     <>
    //         <h1 style={{marginLeft: '10px'}}>{item.title}</h1>
    //             <h2 style={{marginLeft: '20px'}}>{item.author}</h2>
    //     </>
    //     }
    //     console.log(title)
    //     return
    // }
    function renderInfo(title) {
        return title.map((item, index) => (
          <div key={index} style={{ marginLeft: '10px'}}>
            <h1 style={{fontSize:'25px'}}>{item.volumeInfo.title}</h1>
            <h2 style={{ marginLeft: '20px', fontSize:'22px', color:'#333333'}}>{item.volumeInfo.authors}</h2>
            <p style={{ marginLeft: '20px' }}>{item.volumeInfo.description}</p>
          </div>
        
        ));

      }

      return (
        <>
          <div className='container text-center'>
            <div className='row'>
              {title ? (
                <>
                  {renderInfo(title)}
                  <p style={{ marginLeft: '20px' }}>"{title.description}"</p>
                </>
              ) : (
                <h1>Search by Author</h1>
              )}
            </div>
            {/* <p>{title}</p> */}
            <form onSubmit={handleSubmit}>
              <div className='container' style={{ paddingTop: '20px' }}>
                <label htmlFor='title' style={{ marginTop: '10px', fontSize:'30px' }}>Title</label>
                <input type='text' id='title' value={input} onChange={handleChange} name='title' style={{ marginLeft: '15px' }} />
                <button type='submit' style={{ marginLeft: '20px' }}>Search</button>
              </div>
            </form>
          
      
          
          </div>
        </>
      );
      

}

export default SearchByTitle



{/* {data.map(item => {

        } */}

        

        {/* <h1 style={{marginLeft:'10px'}}>{title.title}</h1>
        <h2 style={{marginLeft: '20px'}}>{title.authors[0]}</h2> */}


        {/**function renderInfo(items) {
        return items.map((item, index) => (
          <div key={index} style={{ marginLeft: '10px' }}>
            <h1>{item.volumeInfo.title}</h1>
            <h2 style={{ marginLeft: '20px' }}>{item.volumeInfo.authors}</h2>
            <p style={{ marginLeft: '20px' }}>{item.volumeInfo.description}</p>
          </div>
        
        ));

      } */}