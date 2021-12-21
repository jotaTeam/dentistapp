import React from 'react';
// import { useCreatePatient } from '../../selectors/useCreatePatient';
// import { useDeletePatient } from '../../selectors/useDeletePatient';
import { useGetPatientList } from '../../selectors/useGetPatientList';
import { useGetPatientById } from '../../selectors/useGetPatientById';

export const AdminHome = () => {

    // const data1 = null;

    const { data: data1   } = useGetPatientList();



    // useCreatePatient({
    //     dni: `22`,
    //     name: `Patient 2`,
    //     lastname: 'Prueba'
    // });





    // useDeletePatient({dni: '22'});

    
    const {data: data2} = useGetPatientById('3');

    





    return (
        <div>
            <h1>Home del admin</h1>

            <hr />

            <h3>Listado pacientes:</h3>

            {

                data1
                    ? data1.map(patient => <p key={patient.dni}>{JSON.stringify(patient)}</p>)
                    : <p>loading...</p>
            }


            <br/>
            <hr/>
            <h3>Paciente con el DNI nº3</h3>
            {

                data2
                    ? <p >{JSON.stringify(data2)}</p>
                    : <p>loading...</p>
            }
            <button >Crear</button>

        </div>
    );
};
