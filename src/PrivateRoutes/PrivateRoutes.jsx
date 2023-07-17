import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';


function PrivateRoutes({children}) {
    const {loading}=useContext(AuthContext)
    const {user}=useContext(AuthContext);
    

    if(loading){
      return <div>Loading</div>
    }


    if(user){
        return children
    }
  return <Navigate  to="/" replace></Navigate>
}

export default PrivateRoutes