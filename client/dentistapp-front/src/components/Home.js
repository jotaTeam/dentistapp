import React from 'react'
import { FormattedMessage } from 'react-intl';
import LanguageSelector from './LanguageSelector'

import '../assets/styles/common.css';


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
