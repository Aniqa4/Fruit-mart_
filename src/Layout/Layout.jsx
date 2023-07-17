import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from './Navbar';

function Layout() {


    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:pt-16 pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout;