import React, { useState } from 'react';
import {Form} from './Form';
import {Login} from '../../login/Login';

const Prueba = () => {
    const [state, setstate] = useState(<Form/>);

    const onHandleNext = ()=>{
        setstate(<Login/>)
    }

    return (
        <div>
            {
                state

            }

            {/* <button  onClick={onHandleNext}>

            </button> */}
        </div>
    )
}

export default Prueba
