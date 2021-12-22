import { useFetch } from "../hooks/useFetch";


export const useDeleteCRUD = (id, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'DELETE'
    };



    const data = useFetch(url+id, requestOptions);

    return data;

    

};