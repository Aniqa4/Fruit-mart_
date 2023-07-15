import React, { useContext, useState } from 'react';
import TopHeadlines from '../Components/TopHeadlines';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

function SignUp() {
    const { signUp } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const role = 'client';
        const photoURL = "https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp"
        const newUser = { name, email, role, photoURL }



        signUp(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                })
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })


        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers:
                { 'content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have successfully signned UP!',
            showConfirmButton: false,
            timer: 1500

        })
        navigate(from, { replace: true })
    }


    return (
        <div>
            <TopHeadlines></TopHeadlines>
            <div className='lg:w-3/12 mx-auto my-20 p-20 shadow-2xl rounded-xl'>
                <form onSubmit={handleSignUp} className='grid grid-cols-1 gap-5'>
                    <input type="name" name='name' placeholder='Enter your Name'
                        className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="email" name='email' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="password" name='password' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="submit" value="Sign Up" className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 font-semibold' />
                </form>
                <div className=' text-center my-5 text-gray-500'>Already have an account?
                    <Link to='/sign-in' className=' underline'>Sign In</Link>
                </div>
                <p className=' text-center pt-2 text-red-700'>{error}</p>
            </div>
        </div>
    )
}

export default SignUp