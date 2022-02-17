import {fetchTool} from "../helpers/fetchTool";

export const createData = async(sentData, url) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {

        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(sentData)
    };



  const data = await fetchTool(url, requestOptions);
    

  return data;


};
