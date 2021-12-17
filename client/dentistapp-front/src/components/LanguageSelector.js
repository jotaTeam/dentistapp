import React, {useContext} from 'react';
import es from './../assets/img/spain.png';
import en from './../assets/img/united-kingdom.png';
import {langContext} from './../lang/langContext';

const LanguageSelector = () => {

    const lang = useContext(langContext);
    return (
        <div className="langButtons">
            <button onClick={() => lang.provideLanguage('es')}><img src={es} alt="" width='30px' /></button>
            <button onClick={() => lang.provideLanguage('en')}><img src={en} alt="" width='30px' /></button>
        </div>
    );

}
export default LanguageSelector;