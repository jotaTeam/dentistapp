

export const fetchTool = async(url, requestOptions) => {

  let dataFinal = { data: null, loading: true, error: null };




   

       await  fetch(url, requestOptions)
             .then(async (resp) => await resp.json())
             .then(async (data) =>  {

                      dataFinal = await{
                        loading: false,
                        error: null,
                        data
		    };

            })
            .catch((e) => { 

                console.log(e);

                dataFinal = {
                    loading: false,
                    error: 'Hubo un error cargando los datos',
                    data: null
                }
            })
    


    return dataFinal;


}

