import {fetchTool} from "../helpers/fetchTool";

export const getDataById = (id, url) => {


    const data =  fetchTool(url+id);

    return data;
};
