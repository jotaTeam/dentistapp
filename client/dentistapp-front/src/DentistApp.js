import React, { useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { LangProvider } from './lang/langContext';


const init = () => {

    return /* JSON.parse( localStorage.getItem('user')) || */ { logged: false };
};

export const DentistApp = () => {


    const [user, dispatch] = useReducer(authReducer, {}, init);


    return (
        <>

            <AuthContext.Provider value={{
                user,
                dispatch
            }}>
                <LangProvider>
                    <AppRouter />
                </LangProvider>
            </AuthContext.Provider>

        </>
    );
};
