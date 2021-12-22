import { useFetch } from "../hooks/useFetch";

export const useGetByIdCRUD = (id, url) => {


    const data = useFetch(url+id);

    return data;
};