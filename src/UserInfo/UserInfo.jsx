import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

function UserInfo() {
    const {user,logOut}=useContext(AuthContext)
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
    
  return (
    <div>
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default UserInfo