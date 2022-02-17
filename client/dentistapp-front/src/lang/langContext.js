import React, { useState } from 'react';
import EnglishMessages from './languages/en.json';
import SpanishMessages from './languages/es.json';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({ children }) => {

    let defaultLocale;
    let defaultMessages;
    const lang = localStorage.getItem('lang');

    if(lang){
        defaultLocale = lang;

        if (lang === 'es'){
            defaultMessages = SpanishMessages;
        } else if (lang === 'en'){
            defaultMessages = EnglishMessages;
        } else{
            defaultMessages = SpanishMessages;
            defaultLocale = 'es';
        }
    }

    const [messages, setMessages] = useState(defaultMessages);
    const [locale, setLocale] = useState(defaultLocale);

    const provideLanguage = (language) => {
        switch (language) {
            case 'es':
                setMessages(SpanishMessages);
                setLocale('es');
                localStorage.setItem('lang', 'es');
                break;

            case 'en':
                setMessages(EnglishMessages);
                setLocale('en');
                localStorage.setItem('lang', 'en');
                break;

            default:
                setMessages(SpanishMessages);
                setLocale('es');
                localStorage.setItem('lang', 'es');               
        }
    }

    return (
        <langContext.Provider value={{ provideLanguage: provideLanguage }}>
            <IntlProvider locale = {locale} messages={messages}>
            {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };