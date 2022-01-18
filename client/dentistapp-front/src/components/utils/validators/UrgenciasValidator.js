import React from 'react'
import { useCreateData } from '../../../crud/useCreateData';
import { apiUrl } from '../../../datahelpers/apiURL';

export const UrgenciasValidator = ({formData}) => {

    
    const resp = useCreateData(formData,apiUrl.emergency);
    //console.log(formData);


    return (
        <div>
            <h1>Este es el validator de Urgencias</h1>
        </div>
    )
}
