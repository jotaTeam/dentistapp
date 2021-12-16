import { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../auth/authContext";
import { pass } from "../datahelpers/pass";





export const AdminRoute = ({ children }) => {


    const { user } = useContext(AuthContext);
    
    

    return user.logged && (user.pass === pass.admin)
        ? children
        : <Navigate to="/login"/>
}