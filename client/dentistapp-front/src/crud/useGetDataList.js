import { useFetch } from "../hooks/useFetch";

export const useGetDataList = (url) => {

  const data = useFetch(url);

  return data; 
    
}