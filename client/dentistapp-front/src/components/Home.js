import React from 'react'
import { FormattedMessage } from 'react-intl';

import '../assets/styles/common.css';


export const Home = () => {
    return (
        <div>
            <h1>
                <FormattedMessage
                    id="home.welcome"
                    defaultMessage="Bienvenido"
                />
            </h1>
        </div>
    )
}
