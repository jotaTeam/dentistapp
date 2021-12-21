import { apiUrl } from "../datahelpers/apiURL";
import { useFetch } from "../hooks/useFetch";


export const useUpdatePatient = (patient) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(patient)
    };



    const data = useFetch(apiUrl.patient, requestOptions);

    
};