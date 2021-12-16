import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../auth/authContext";
import { pass } from "../datahelpers/pass";




export const PacienteRoute = ({ children }) => {
    
    
    const { user } = useContext(AuthContext);
    
    

    return user.logged && (user.pass === pass.patient)
        ? children
        : <Navigate to="/login"/>
}