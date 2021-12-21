import { apiUrl } from "../../datahelpers/apiURL";
import { useFetch } from "../../hooks/useFetch";


export const useDeleteUser = (id) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'DELETE'
    };



    const data = useFetch(apiUrl.user+id, requestOptions);

    return data;

    

};