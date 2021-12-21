import { apiUrl } from "../../datahelpers/apiURL";
import { useFetch } from "../../hooks/useFetch";


export const useUpdateUser = (user, id) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(user)
    };



    const data = useFetch(apiUrl.user+id, requestOptions);

    return data;

    
};