import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className='bg-image my-5'>
            <div className='py-20 text-white text-2xl  lg:py-96'>
                <div className=' bg-slate-700 bg-opacity-25 p-10'>
                    <h1>Welcome to <span className=' font-bold text-black'>Fruit<span className=' text-red-700'>Mart
                    </span></span>! </h1>
                    <p>We offer a wide variety of fruits to choose from, so you're sure to find something you love.
                        Our fruits are organic and pesticide-free.
                        Order your fruit today and experience the difference!</p>
                </div>
            </div>
        </div>
    )
}

export default Banner