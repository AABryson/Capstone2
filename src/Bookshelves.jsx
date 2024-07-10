import React from 'react'
import axios from 'axios'

function Bookshelves ({apiKey, authToken, bookshelfId}) {

    // const apiKey = 'AIzaSyBZR1XenESLwQpCZDFvClClUHijprCS7D4'; // Replace with your actual API key 

    // const authToken = 'a0AXooCgsG0zqHcr0yTff5vaELRFk5aIX8VvEMroOTU--eovwlARjSXSqwFDDPPtMYBy4ZeJy6kawsEQYNpuMpNEKLpbituH92emmKTuMvOEDfHsYQzkZr_FhJjf5qrRf5IkTN1WGN__SDaHSttgG3YAwaTNilpY75fgR9aCgYKAf4SARESFQHGX2MiqjTEWYT4DvXFTblxJZDpUA0171'; // Replace with your actual auth token 

    // const bookshelfId = 0; // The ID of the bookshelf you want to access 

    // const url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookshelfId}/volumes?key=${apiKey}`; 

    async function getbookshelves(apiKey, authToken, bookshelfId) {
        let result = await axios.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookshelfId}/volumes?key=${apiKey}`, { headers: {
            'Authorization': `Bearer ${authToken}`
        }
        })
        console.log('result from bookshelf request', result)
   
    }
    
    getbookshelves(apiKey, authToken, bookshelfId)

    return (
        <div className='container'>this is the bookshelves page</div>

    )
}

export default Bookshelves