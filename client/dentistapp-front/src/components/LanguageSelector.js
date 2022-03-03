import React, { useContext } from 'react';
//import es from './../assets/img/spain.png';
//import en from './../assets/img/united-kingdom.png';
import logo from './../assets/img/logo/dt_logo_2.svg';
import { langContext } from './../lang/langContext';
import { Link } from 'react-router-dom';

const LanguageSelector = () => {

    const lang = useContext(langContext);

    return (


        <section className="menu-cont">

            {(!localStorage.getItem('lang'))
                && lang.provideLanguage('es')
            }
            <div className="logo-cont">
                <Link to="/" ><img className="menu-logo" src={logo} alt="dentist" width='40px'></img></Link>

            </div>

            <div className="langButtons">
                {/* <button onClick={() => lang.provideLanguage('es')}><img src={es} alt="" width='40px' /></button> */}
                {/* <button onClick={() => lang.provideLanguage('en')}><img src={en} alt="" width='40px' /></button> */}

                <input type="radio" id="lang-es" className='lang-change-btn' name="lang-selection" onChange={() => lang.provideLanguage('es')} checked={localStorage.getItem('lang') === 'es'} />
                <label className='lb-lang' htmlFor="lang-es">ES</label>

                <input type="radio" id="lang-en" className='lang-change-btn' name="lang-selection" onChange={() => lang.provideLanguage('en')} checked={localStorage.getItem('lang') === 'en'} />
                <label className='lb-lang' htmlFor="lang-en">EN</label>


            </div>
        </section>
    );

}
export default LanguageSelector;
