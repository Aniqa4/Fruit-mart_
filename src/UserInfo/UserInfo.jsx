import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Title from '../Components/Title';
import Dashboard from '../Dashboard/Dashboard';
import OrderHistory from './OrderHistory';

function UserInfo() {
    const { user, logOut } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);

            })
    }

    useEffect(() => {
        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const email = user?.email;
    const existingUser = users?.find(x => x.email === email)
    //console.log(existingUser);


    return (
        <div>
            <Title title={'User Information'}></Title>
            <div className=' font-semibold mx-5 lg:w-4/12 lg:mx-auto bg-yellow-300 p-10 rounded-xl'>
                <img src={existingUser?.photoURL} className='w-3/12'/>
                <h1>Name: {existingUser?.name}</h1>
                <p className=' py-2'>Email: {existingUser?.email}</p>
                {
                    existingUser?.role!=='buyer' && <p className=' pb-2'>Role: {existingUser?.role}</p>
                }
                <button onClick={handleSignOut} 
                className=' bg-white rounded hover:bg-slate-200 px-5 py-2 text-xs'>Sign Out</button>
            </div>
            {
                existingUser?.role!=='buyer' && <Dashboard></Dashboard>
            }
            {
                existingUser?.role==='buyer' && <OrderHistory email={existingUser?.email}></OrderHistory>
            }
        </div>
    )
}

export default UserInfo