import React from 'react';
import { getPatientList } from '../../selectors/getPatientList';

export const AdminHome = () => {

    const data = getPatientList();

    console.log(data);


    

    return (
        <div>
            <h1>Home del admin</h1>
        </div>
    )
}
