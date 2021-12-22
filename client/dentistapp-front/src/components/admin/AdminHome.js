import React from 'react';
import { useGetListCRUD } from '../../crud/useGetListCRUD';
import { apiUrl } from '../../datahelpers/apiURL';
import { useGetByIdCRUD } from '../../crud/useGetByIdCRUD';

export const AdminHome = () => {

    // const data1 = null;

    const { data: data1 } = useGetListCRUD(apiUrl.patient);

    const { data: data2 } = useGetByIdCRUD('3', apiUrl.patient);


    const {data: user} = useGetListCRUD(apiUrl.user);
    
    const {data: user2} = useGetByIdCRUD('2', apiUrl.user);


    




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
