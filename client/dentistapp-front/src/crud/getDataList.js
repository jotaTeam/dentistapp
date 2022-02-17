import {fetchTool} from "../helpers/fetchTool";

export const getDataList = async(url) => {

  const data = fetchTool(url);


  return data; 
    
}
