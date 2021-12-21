import React from 'react'
import { FormattedMessage } from 'react-intl';
import LanguageSelector from './LanguageSelector'

import '../styles/common.css';


{/*Añadido provisionalmente el LanguageSelector a Home para hacer pruebas*/ }

export const Home = () => {
    return (
        <div>
            <LanguageSelector />
            <h1>
                <FormattedMessage
                    id="home.welcome"
                    defaultMessage="Bienvenido"
                />
            </h1>
        </div>
    )
}
