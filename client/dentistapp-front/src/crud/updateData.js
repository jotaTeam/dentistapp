import {fetchTool} from "../helpers/fetchTool";

export const updateData = (sentData, id, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(sentData)
    };



    const data = fetchTool(url+id, requestOptions);

    return data;

    
};
