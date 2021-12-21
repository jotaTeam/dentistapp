import React from 'react';
import { useCreatePatient } from '../../selectors/useCreatePatient';
import { useGetPatientList } from '../../selectors/useGetPatientList';

export const AdminHome = () => {

    const { data } = useGetPatientList();



    useCreatePatient({
        dni: '44',
        name: 'Cuatro',
        lastname: 'Prueba'
    });









    return (
        <div>
            <h1>Home del admin</h1>

            <hr />

            <h3>Listado pacientes:</h3>

            {

                data
                    ? data.map(patient => <p key={patient.dni}>{JSON.stringify(patient)}</p>)                    
                    : <p>loading...</p>
            }

            <button >Crear</button>

        </div>
    );
};
