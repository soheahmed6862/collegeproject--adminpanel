import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
 

    const admin=useSelector(state =>(state.user.currentuser))
    console.log(admin)
    return (
        <div>
            {
                admin ? children : <Navigate to="/Login" />
            }
        </div>
    );
};

export default Privateroute;