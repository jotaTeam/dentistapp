import { apiUrl } from "../../datahelpers/apiURL";
import { useFetch } from "../../hooks/useFetch";


export const useCreateUser = (user) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    };



    const data = useFetch(apiUrl.user, requestOptions);

    return data;

    
};