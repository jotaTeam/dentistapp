import React from 'react'
//import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";


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
        {/* <div className='under-background'>
        </div> */}

       

        <section className="home-header">
        <div className='home-title-cont'>    
        <h1 className='home-title-left'>Dentist App</h1>
        <p className='home-description'>
        <FormattedMessage
            id="home.subtitle"
            defaultMessage="Servicio de cita previa y urgencias en tu clínica dental de confianza"         
        />
        </p>
        </div>
        <section className='home-options-cont'>

        
        <Link to="/urgencias" className="link-cont">
            <div className='top-link'></div>
            <div className='img-cont'></div>
            <div className='img-date'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs></defs><title>date_1</title><g id="Capa_2" data-name="Capa 2"><g id="circle_white" data-name="circle white"><circle class="cls-11" cx="250" cy="250" r="250"/></g><g id="Capa_3" data-name="Capa 3"><circle class="cls-22" cx="249" cy="251" r="212.5"/></g><g id="Capa_4" data-name="Capa 4"><rect class="cls-33" x="285" y="205" width="31" height="133" transform="translate(29 572) rotate(-90)"/><rect class="cls-33" x="233.5" y="124.5" width="31" height="133"/></g></g></svg></div>
            <h3>
            <FormattedMessage
            id="home.date"
            defaultMessage="Cita Previa"         
            />
            </h3>
            <p>
            <FormattedMessage
            id="home.dateDescription"
            defaultMessage="Solicita cita previa"         
            />
            </p>
        </Link> 
       
        

        <Link to="/urgencias" className='link-cont urgency'>
        <div className='top-urgency'></div>
        <div className='img-cont'></div>
        <div className='img-date'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs></defs><title>urgency</title><g id="Capa_2" data-name="Capa 2"><g id="circle_white" data-name="circle white"><circle class="cls-11" cx="250" cy="250" r="250"/></g><g id="Capa_7" data-name="Capa 7"><circle class="cls-23" cx="249" cy="250" r="212.5"/></g><g id="Capa_8" data-name="Capa 8"><rect class="cls-34" x="231" y="121" width="34" height="173"/><rect class="cls-34" x="229" y="324" width="36" height="44"/></g></g></svg></div>
            <h3>
           <FormattedMessage
            id="home.emergency"
            defaultMessage="Urgencias"         
            /></h3>
            <p>
            <FormattedMessage
            id="home.emergencyDescription"
            defaultMessage="Formulario de urgencias"         
            />
            </p>

        </Link>

     
        </section>

        </section>
        {/* <div class="login-cont">
       { <Login></Login> }
       </div> */}

      
        </>
    )
}
