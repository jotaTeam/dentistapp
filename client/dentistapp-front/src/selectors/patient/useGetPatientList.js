import { apiUrl } from '../../datahelpers/apiURL';
import { useFetch } from '../../hooks/useFetch';

export const useGetPatientList = () => {

  

  const data = useFetch(apiUrl.patient);

  return data; 
    
}