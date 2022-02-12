import React from 'react'
//import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import '../assets/styles/common.css';
import '../assets/styles/home.css';
//import { Login } from './login/Login';



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
        <div className='under-background'>
        </div>

       

        <header class="home-header">
        <div className='home-title-cont'>    
        <h1 className='home-title-left'>Dentist App</h1>
        <p className='home-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ul</p>
        </div>
        <section className='home-options-cont'>

        <Link to="/urgencias" className="btn-home home-link-cont">Cita Previa</Link> 
        <Link to="/urgencias" className="btn-home home-link-cont">Urgencias</Link>
        </section>

        </header>
        {/* <div class="login-cont">
       { <Login></Login> }
       </div> */}

      
        </>
    )
}
