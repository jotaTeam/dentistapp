import { apiUrl } from "../datahelpers/apiURL";
import { useFetch } from "../hooks/useFetch";


export const useDeletePatient = (dni) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify(dni)
    };



    const data = useFetch(apiUrl.patientDelete, requestOptions);

    console.log(data);

};