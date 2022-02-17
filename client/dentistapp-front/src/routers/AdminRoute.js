import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth/authContext";
import { pass } from "../datahelpers/pass";





export const AdminRoute = ({ children }) => {


    const { user } = useContext(AuthContext);
    
    const {pathname} = useLocation();

    localStorage.setItem('lastPath', pathname );

    return user.logged && (user.pass === pass.admin)
        ? children
        : <Navigate to="/login"/>
}