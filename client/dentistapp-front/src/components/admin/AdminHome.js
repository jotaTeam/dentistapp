import React from 'react';
import { useGetPatientList } from '../../selectors/useGetPatientList';

export const AdminHome = () => {

    const data = useGetPatientList();

    console.log(data);

    

    console.log(data);


    

    return (
        <div>
            <h1>Home del admin</h1>

        </div>
    )
}
