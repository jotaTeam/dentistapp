import { apiUrl } from '../../datahelpers/apiURL';
import { useFetch } from '../../hooks/useFetch';

export const useGetUserList = () => {

  

  const data = useFetch(apiUrl.user);

  return data; 
    
}