import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth/authContext";
import { pass } from "../datahelpers/pass";




export const PacienteRoute = ({ children }) => {
    
    
    const { user } = useContext(AuthContext);

    const {pathname} = useLocation();
    
    localStorage.setItem('lastPath', pathname );

    return user.logged && (user.pass === pass.patient)
        ? children
        : <Navigate to="/login"/>
}