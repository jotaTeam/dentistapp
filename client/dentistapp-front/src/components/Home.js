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
        <div className='under-background'></div>

       

        <header class="home-header">
        <div className='home-title-cont'>    
        <h1 className='home-title-left'>Dentist</h1>
        <h1 className='home-title-right'>App</h1>
        </div>
        <section className='home-options-cont'>

        <div className="home-link-cont">
        <Link to="/urgencias" class="btn-home">Urgencias</Link>
        </div>

        <div className="home-link-cont">
        <Link to="/urgencias" class="btn-home">Cita Previa</Link> 
        </div>

        </section>

        </header>
        {/* <div class="login-cont">
       { <Login></Login> }
       </div> */}

      
        </>
    )
}
