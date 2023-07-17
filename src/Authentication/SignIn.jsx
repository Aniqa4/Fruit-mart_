import React, { useContext, useEffect, useState } from 'react';
import TopHeadlines from '../Components/TopHeadlines';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';
import Title from '../Components/Title';


function SignIn() {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const provider = new GoogleAuthProvider;
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/users')
          .then(res => res.json())
          .then(data => {
            setUsers(data)
          })
      }, [])



    //------------login with email pass----------------
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You have successfully signned In!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })  
    }


     //---------------google sign in---------------------
    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You have successfully signned In!',
                        showConfirmButton: false,
                        timer: 1500
                    })

                const email = loggedUser?.email;
                const existingUser = users.find(x => x.email === email)
                if (!existingUser) {
                    const name = loggedUser.displayName;
                    const photoURL = loggedUser.photoURL;
                    const email = loggedUser.email;
                    const role = 'buyer';
                    const newUser = { name, email, photoURL, role }
                    fetch('https://fruit-mart-server-side-aniqa4.vercel.app/user', {
                        method: 'POST',
                        headers:
                            { 'content-type': 'application/json' },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                }
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
        <div>
            <TopHeadlines></TopHeadlines>
            <Title title={'Sign in'}></Title>
            <div className='lg:w-3/12 mx-auto md:my-20 p-10 md:p-20 md:shadow-2xl md:rounded-xl'>
                <form onSubmit={handleSignIn} className='grid grid-cols-1 gap-5'>
                    <input type="email" name='email' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="password" name='password' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="submit" value="Sign In" className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 font-semibold' />
                </form>
                <div className="divider">OR</div>
                <div onClick={handleGoogleSignIn} className='flex justify-center gap-2 text-3xl p-2 rounded-full  bg-gray-100 hover:bg-gray-200'><FcGoogle />
                    <span className=' text-xl'>Sign In with google</span>
                </div>
                <div className=' text-center my-5 text-gray-500'>Don't have an account? <Link to='/sign-up' className=' underline'>Sign Up</Link></div>
                <p className=' text-center pt-2 text-red-700'>{error}</p>
            </div>
        </div>
    )
}

export default SignIn