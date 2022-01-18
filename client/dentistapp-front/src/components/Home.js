import React from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import '../assets/styles/common.css';
import '../assets/styles/home.css';
import { Login } from './login/Login';



export const Home = () => {
    return (
        /*{ <div class="home-div">
           <h1>
                <FormattedMessage
                    id="home.welcome"
                    defaultMessage="Bienvenido"
                />
            </h1>}
        </div>*/
        <>
        <header class="home-header"></header>
        <div class="login-cont">
       <Login></Login>
       </div>

       <div class="home-link-cont">
       <Link to="/urgencias" class="btn-home">Solicitud de Urgencias</Link>
       </div>
        </>
    )
}
