import { useFetch } from '../hooks/useFetch';

export const useGetListCRUD = (url) => {

  const data = useFetch(url);

  return data; 
    
}