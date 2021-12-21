import { apiUrl } from "../../datahelpers/apiURL";
import { useFetch } from "../../hooks/useFetch";


export const useGetUserById = (id) => {


    const data = useFetch(apiUrl.user+id);

    return data;
};