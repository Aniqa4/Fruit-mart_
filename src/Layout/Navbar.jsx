import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';
import { GrCart } from 'react-icons/gr';
import { AuthContext } from '../Authentication/AuthProvider';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';
import './Navbar.css'


function Navbar() {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);

    const handleOpen = () => {
        setOpen(true)
        setClose(false)
        console.log('clicked');
    }
    const handleClose = () => {
        setOpen(false)
        setClose(true)
        console.log('clicked');
    }

    return (
        <div className=' bg-yellow-300 opacity-95  py-3 fixed top-0 left-0 right-0'>
            <div className='nav2 flex items-baseline justify-between gap-10 px-5'>
                <div>
                    <ul className='flex gap-10 items-baseline'>
                        <li><Link to='/'><h1 className=' text-2xl font-bold'>Fruit<span className=' text-red-700'>Mart</span></h1></Link></li>
                        <li> <Link to='/all-products'>All Products</Link></li>
                        <li><Link to='/Cart'><GrCart /></Link></li>
                    </ul>
                </div>
                <div>
                    {
                        user ? <Link to='user-info'><p className=' text-3xl'><BiSolidUserCircle></BiSolidUserCircle></p></Link> :
                            <p className=' hover:font-semibold'><Link to='sign-in' >Sign In</Link></p>
                    }
                </div>
            </div>
            {
                //navbar for small devices
            }
            <div className='nav items-baseline justify-between'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <GiHamburgerMenu />
                    </label>
                    <ul tabIndex={1} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100">
                        <li></li>
                        <li><Link to='/all-products'>All Products</Link></li>
                        <li><Link to='/Cart'>Cart</Link></li>
                        <li>
                            {
                                user ? <Link to='user-info'><p>User Profile</p></Link> :
                                    <p className=' hover:font-semibold'><Link to='sign-in' >Sign In</Link></p>
                            }
                        </li>
                    </ul>
                </div>
                <div className='pe-10'><Link to='/'><h1 className=' text-2xl font-bold'>Fruit<span className=' text-red-700'>Mart</span></h1></Link></div>
            </div>
        </div>
    )
}

export default Navbar