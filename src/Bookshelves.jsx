import React from 'react'
import axios from 'axios'

function Bookshelves () {

    const apiKey = 'AIzaSyBZR1XenESLwQpCZDFvClClUHijprCS7D4'; // Replace with your actual API key 

    const authToken = 'ya29.a0AXooCgsNzx_TedK8NwCW_KYgCD644NMYz8kxXudMjHxQXQQ0N0_vOWIP_yb96bQNtA74P9N31bC7Mxyev8qqQcCZj3ZRd6abYj07N9kM8hBsTR-h--DnsfLNhYR4x6KduVca0_sH_1tvobTJ3hpA-oxGV2yy5QhPYGYKaCgYKAb0SARESFQHGX2MipUE2LzEgYhSSg88ASYpHGw0171'; // Replace with your actual auth token 

    const bookshelfId = 0; // The ID of the bookshelf you want to access 

    

    async function getbookshelves(apiKey, authToken, bookshelfId) {
        let result = await axios.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookshelfId}/volumes?key=${apiKey}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
        console.log('result from bookshelf request', result)
        return result
        }
    
   
    let result = getbookshelves(apiKey, authToken, bookshelfId)

    // let listFunction = (result) => {
    //     if (result.data.items) {
    //         let books = result.data.items
    //         return (
    //             {books.map((book) => (
    //                 <li>{book.volumeInfo.title}</li>
    //             ))}
                
    //         )
    //     }
    // }
    


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 style={{
                        fontFamily: 'garamond', fontSize: '200px', color:'white'}}>My Library</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <h5>Favorites</h5>
                        {/* <ul>{listFunction}</ul> */}
                 
                </div>
                <div className='col-4'>
                    <h5>To Read</h5>
                </div>
                <div className='col-4'>
                    <h5>Have Read</h5>
                </div>
            </div>
        </div>

    )
}

export default Bookshelves