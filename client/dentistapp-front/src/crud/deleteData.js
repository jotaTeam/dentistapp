import {fetchTool} from "../helpers/fetchTool";

export const deleteData = (id, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'DELETE'
    };



    const data = fetchTool(url+id, requestOptions);

    return data;

    

};
