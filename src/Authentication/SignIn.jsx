import React from 'react';
import TopHeadlines from '../Components/TopHeadlines';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


function SignIn() {

    return (
        <div>
            <TopHeadlines></TopHeadlines>
            <div className='lg:w-3/12 mx-auto my-20 p-20 shadow-2xl rounded-xl'>
                <form className='grid grid-cols-1 gap-5'>
                    <input type="email" name='email' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="password" name='password' className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                    <input type="submit" value="Sign In" className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 font-semibold' />
                </form>
                <div className="divider">OR</div>
                <div className='flex justify-center gap-2 text-3xl p-2 rounded-full  bg-gray-100 hover:bg-gray-200'><FcGoogle />
                    <span className=' text-xl'>Sign In with google</span>
                </div>
                <div className=' text-center my-5 text-gray-500'>Don't have an account? <Link to='/sign-up' className=' underline'>Sign Up</Link></div>
            </div>
        </div>
    )
}

export default SignIn