import React, {useEffect } from 'react';
import { apiUrl } from '../../datahelpers/apiURL';
import { getDataList } from '../../crud/getDataList';
import { getDataById } from '../../crud/getDataById';
import { createData } from '../../crud/createData';
import {useState} from 'react';

export const AdminHome = () => {

   const [data1, setData1] = useState();
   const [data2, setData2] = useState();
   const [user, setUser] = useState();
   const [user2, setUser2] = useState();

  useEffect(() => {
     getDataList(apiUrl.patient)
     .then(data => setData1(data.data));
    getDataList(apiUrl.user)
       .then(data=> setUser(data.data));
    getDataById('a3', apiUrl.patient) 
      .then(data => setData2(data.data));
    getDataById('2', apiUrl.user) 
      .then(data => setUser2(data.data));

  },[]);


  const pruebi = async() => {

    const pruebi1 = await createData({name: 'testfinal', password: '1234', email: 'email@example.com', google_token: '12345678'}, apiUrl.user);

    console.log(pruebi1)
    
     createData({name: 'otro pa', lastname: '1234', dni: 'a3'}, apiUrl.patient);
   
    const dataUrgencia = await createData({name: 'PruebaUno', surnames: 'Apellido', phone: 987653214, allergy: true, description_allergy: 'Prueba uno y tal', bleeding: true, pain: true, cavity: true, fracture: true, pieces: 'unos cuantos' }, apiUrl.emergency);

       console.log(dataUrgencia);

  }




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



		      <button onClick={pruebi}>Pruebi</button>
            

        </div>
    );
};
