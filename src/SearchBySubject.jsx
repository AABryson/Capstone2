import React, {useState, useContext} from 'react'
import axios from 'axios'
// import { useParams, Link } from 'react-router-dom'
import ContextObject from './ContextObject'



function SearchBySubject() {
    console.log('SearchBySubject page')
    const {subject, setSubject} = useContext(ContextObject)
    const [queryString, setQueryString] = useState('')
    const [input, setInput] = useState('')


    // const {subject} = useParams()
    

    let BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    async function handleSubmit(evt) {
        evt.preventDefault()

        const formattedQueryString = input.split(' ').join('+');
        setQueryString(formattedQueryString);

        let response = await axios.get(`${BASE_URL}subject:${queryString}&key=AIzaSyCb0W-9jMh6sviCF2ugUnLp_Sc-D5Z0sWI`)
        console.log('items from subject api call', response.data.items)
        console.log('response.data from subject api call', response.data)

        setSubject(response.data.items)
        
        setInput('')  
    }
    


    function handleChange(evt) {
        let value = evt.target.value
        setInput(value) 
    }
    
    console.log('what is in subject state', subject)
    
    function renderInfo(subject) {
        return subject.map((item, index) => (
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
        <>
        <div className='container text-center'>
            <div className='row'>
            {subject ? (
                <>
                {renderInfo(subject)}
                <p style={{ marginLeft: '20px' }}>"{subject.description}"</p>
                </>
            ) : (
                <h1>Search by Subject</h1>
            )}
            </div>
    
            <form onSubmit={handleSubmit}>
                <div className='container' style={{ paddingTop: '20px' }}>
                    <label htmlFor='subject' style={{ marginTop: '10px', fontSize:'30px' }}>Subject</label>
                    <input type='text' id='subject' value={input} onChange={handleChange} name='subject' style={{ marginLeft: '15px' }} />
                        <button type='submit' style={{ marginLeft: '20px' }}>Search</button>
                </div>
            </form>
        </div>
        </>
    );
    

}

export default SearchBySubject



{/* {data.map(item => {

        } */}

        

        {/* <h1 style={{marginLeft:'10px'}}>{subject.subject}</h1>
        <h2 style={{marginLeft: '20px'}}>{subject.authors[0]}</h2> */}


        {/**function renderInfo(items) {
        return items.map((item, index) => (
          <div key={index} style={{ marginLeft: '10px' }}>
            <h1>{item.volumeInfo.subject}</h1>
            <h2 style={{ marginLeft: '20px' }}>{item.volumeInfo.authors}</h2>
            <p style={{ marginLeft: '20px' }}>{item.volumeInfo.description}</p>
          </div>
        
        ));

      } */}