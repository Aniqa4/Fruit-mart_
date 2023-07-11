import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className=' bg-yellow-500 opacity-95  py-3 fixed top-0 left-0 right-0'>
            <div className=' flex gap-10 items-baseline px-5'>
                <Link to='/'><h1 className=' text-2xl font-bold'>Fruit<span className=' text-red-700'>Mart</span></h1></Link>
                <Link to='/all-products'>All Products</Link>
            </div>
        </div>
    )
}

export default Navbar