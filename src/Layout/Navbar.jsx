import React from 'react'
import { Link } from 'react-router-dom';
import {BiSolidUserCircle } from 'react-icons/bi';
import {GrCart } from 'react-icons/gr';


function Navbar() {
    return (
        <div className=' bg-yellow-300 opacity-95  py-3 fixed top-0 left-0 right-0'>
            <div className=' flex justify-between gap-10 px-5'>
                <div className='flex gap-10 items-baseline'>
                    <Link to='/'><h1 className=' text-2xl font-bold'>Fruit<span className=' text-red-700'>Mart</span></h1></Link>
                    <Link to='/all-products'>All Products</Link>
                    <Link to='/Cart'><GrCart/></Link>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
                <div>
                    <Link to='sign-in'><p className=' text-3xl'><BiSolidUserCircle></BiSolidUserCircle></p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar