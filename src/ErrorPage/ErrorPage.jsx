import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className=' grid justify-center my-20'>
            <div>
                <img src="https://www.globalsign.com/application/files/9516/0389/3750/What_Is_an_SSL_Common_Name_Mismatch_Error_-_Blog_Image.jpg" 
                className='rounded w-6/12 mx-auto' />
            </div>
            <Link t0="/" className='underline text-center'> Back to Home page</Link>
        </div>
    )
}

export default ErrorPage;