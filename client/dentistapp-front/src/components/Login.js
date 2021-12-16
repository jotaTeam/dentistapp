import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext';
import { pass } from '../datahelpers/pass';
import { types } from '../datahelpers/types';

export const Login = () => {

    const {user, dispatch} = useContext(AuthContext);


   

    //TODO: mover esta funcion fuera

    const handleClick = (e) => {


        switch (e.target.name){

            case 'paciente':

                const loginPaciente = {
                    payload:{
                        name: 'paciente',
                        pass: pass.patient
                    },

                    type: types.login
                }

                dispatch(loginPaciente);

                

            break;

            case 'admin':

                const loginAdmin = {
                    payload:{
                        name: 'admin',
                        pass: pass.admin
                    },

                    type: types.login
                }

                dispatch(loginAdmin);

                

            break;

            case 'logout':

                const logout = {
                    

                    type: types.logout
                }

                dispatch(logout);

                

            break;
        }
    }


    return (
        <>
            <h1>Login</h1>
            <hr/>

            <button
                onClick={handleClick}
                name='paciente'
            >
                Paciente

            </button>

            <button
                onClick={handleClick}
                name='admin'
            >
                Admin

            </button>

            <button
                onClick={handleClick}
                name='logout'
            >
                Logout

            </button>
        </>
    )
}
