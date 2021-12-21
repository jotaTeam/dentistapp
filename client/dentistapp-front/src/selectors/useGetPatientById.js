import { apiUrl } from "../datahelpers/apiURL";
import { useFetch } from "../hooks/useFetch";


export const useGetPatientById = (dni) => {

    
    const data = useFetch(apiUrl.patientById+dni);

    return data;
};