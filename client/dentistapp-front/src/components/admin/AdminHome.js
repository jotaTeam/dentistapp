import React from 'react';
import { useGetPatientList } from '../../selectors/patient/useGetPatientList';
import { useGetPatientById } from '../../selectors/patient/useGetPatientById';
import { useGetUserList } from '../../selectors/user/useGetUserList';
import { useGetUserById } from '../../selectors/user/useGetUserById';

export const AdminHome = () => {

    // const data1 = null;

    const { data: data1 } = useGetPatientList();

    const { data: data2 } = useGetPatientById('3');


    const {data: user} = useGetUserList();
    
    const {data: user2} = useGetUserById(2);




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


            <br />
            <hr />
            <h3>Paciente con el DNI nº3</h3>
            {

                data2
                    ? <p >{JSON.stringify(data2)}</p>
                    : <p>loading...</p>
            }

            <br />
            <hr />
            <h3>Listado de usuarios</h3>
            {

                user
                    ? user.map(usertemp => <p key={usertemp.id}>{JSON.stringify(usertemp)}</p>)
                    : <p>loading...</p>
            }
            <br />
            <hr />
            <h3>Usuario con el Id 2</h3>
            {

                user2
                    ? <p >{JSON.stringify(user2)}</p>
                    : <p>loading...</p>
            }
            

        </div>
    );
};
