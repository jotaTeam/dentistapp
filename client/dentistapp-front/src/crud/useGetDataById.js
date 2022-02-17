import { useFetch } from "../hooks/useFetch";

export const useGetDataById = (id, url) => {


    const data =  useFetch(url+id);

    return data;
};