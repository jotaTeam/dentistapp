import { useFetch } from "../hooks/useFetch";

export const useUpdateData = (sentData, id, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(sentData)
    };



    const data = useFetch(url+id, requestOptions);

    return data;

    
};