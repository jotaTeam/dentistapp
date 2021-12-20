import { useFetch } from '../hooks/useFetch';

export const getPatientList = () => {

    const data = null;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/patients/", requestOptions)
        .then(response => data = response)
        .then(result => data = result)
        .catch(error => console.log('error', error));

    

     return data; 
    
}