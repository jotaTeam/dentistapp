import { useFetch } from "../hooks/useFetch";

export const useCreateData = (sentData, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(sentData)
    };



    const data = useFetch(url, requestOptions);

    return data;


};
